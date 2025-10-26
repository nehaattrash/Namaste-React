import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import {useState} from "react";
const Body =()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);

    return (
        <div>
            <button className="filter-btn" onClick={()=>{
               let filteredList = listOfRestaurants.filter(res=>res.info.avgRating > 4);
               setListOfRestaurants(filteredList);
            }}>Top Rated Restaurant</button>
            <div className="res-container">
               {listOfRestaurants.map((res)=><RestaurantCard key={res.info.id} resData={res}/>)}
            </div>
        </div>
    );
};

export default Body;