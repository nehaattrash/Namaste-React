import RestaurantCard, { withLabelPromoted } from "./RestaurantCard";
import {useState,useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body =()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [originalListOfRestaurants,setOriginalListOfRestaurants] = useState([]);
   const {loggedInUser,setUserName} = useContext(UserContext);
    useEffect(()=>{
        console.log("Body UseEffect called!");
        fetchData();
    },[]);
    const RestaurantWithPromotedLabel = withLabelPromoted(RestaurantCard);
    const promoted = "PROMOTED";
    const fetchData = async ()=>{
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("http://localhost:9090/courses");
       const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();

        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOriginalListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    console.log("Body Rendered");

    if(useOnlineStatus() === false) 
        return <h1>Looks like you are offline</h1>

    return listOfRestaurants.length === 0 ? <Shimmer/> :(
        <div>
            <input className="m-1 p-1 border border-solid border-black" type="text" value={searchText} onChange={(e)=>{
                console.log(searchText);
                setSearchText(e.target.value);
            }}/>
            <button className="m-4 px-4 py-1.5 bg-green-100 rounded-lg" onClick={()=>{
                const filteredList = searchText === "" ? originalListOfRestaurants: originalListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setListOfRestaurants(filteredList);
            }}>Search</button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
               let filteredList = listOfRestaurants.filter(res=>res.info.avgRating > 4);
               setListOfRestaurants(filteredList);
            }}>Top Rated Restaurant</button>
             <input className="m-2 p-2 border border-black rounded-lg" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
            <div className="flex flex-wrap">
               {listOfRestaurants.map((res)=><Link key={res.info.id} to={"restaurant/"+res.info.id}> 
               {res.info.avgRating > 4 ? <RestaurantWithPromotedLabel resData={res}/> :  <RestaurantCard  resData={res}/> }
               </Link>)}
            </div>
        </div>
    );
};

export default Body;