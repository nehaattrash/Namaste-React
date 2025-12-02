import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () =>{
    const [showIndex,setShowIndex] = useState(0);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    var count = 0;
    if(resInfo === null) return <Shimmer/>;

   const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info ;
   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                        .filter(c=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(",")}     {costForTwoMessage}</h2>
            <div>
                {categories.map((category,index)=>
                <RestaurantCategory key={count++}
                categoryData={category?.card?.card} showItems={index=== showIndex ? true : false} 
                setShowIndex = {()=>setShowIndex(index)} />)}
            </div>
        </div>
    )
}
export default RestaurantMenu;