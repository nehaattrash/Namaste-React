import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body =()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [originalListOfRestaurants,setOriginalListOfRestaurants] = useState([]);
    useEffect(()=>{
        console.log("UseEffect called!");
        fetchData();
    },[]);

    const fetchData = async ()=>{
      //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("http://localhost:9090/courses");
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();

        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOriginalListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    console.log("Body Rendered");

    return listOfRestaurants.length === 0 ? <Shimmer/> :(
        <div>
            <input type="text" value={searchText} onChange={(e)=>{
                console.log(searchText);
                setSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
                const filteredList = searchText === "" ? originalListOfRestaurants: originalListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setListOfRestaurants(filteredList);
            }}>Search</button>
            <button className="filter-btn" onClick={()=>{
               let filteredList = listOfRestaurants.filter(res=>res.info.avgRating > 4);
               setListOfRestaurants(filteredList);
            }}>Top Rated Restaurant</button>
            <div className="res-container">
               {listOfRestaurants.map((res)=><Link key={res.info.id} to={"restaurant/"+res.info.id}> <RestaurantCard resData={res}/> </Link>)}
            </div>
        </div>
    );
};

export default Body;