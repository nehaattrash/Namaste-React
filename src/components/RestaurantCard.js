import { IMG_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400" >
            <img className="rounded-lg" src={IMG_URL+cloudinaryImageId}/>
           <h4 className="font-bold py-4 text-lg">{name}</h4> 
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating} stars</h4>
           <h4>{deliveryTime} mins</h4>
        </div>
    );
};

export const withLabelPromoted = (RestaurantCard)=>{
    return (props)=>{
     return(   <div>
            <label style={{backgroundColor:"black",color:"white" , margin:"2px",padding:"2px"}}>Promoted</label>
            <RestaurantCard {...props}/>
        </div>
     );
    }
}
export default RestaurantCard;

//for the Label - className = "absolute bg-black text-white m-2 p-2 rounded-lg"