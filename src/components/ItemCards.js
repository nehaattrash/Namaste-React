import { IMG_URL } from "../utils/constants";
const ItemCards = (props) =>{
    const {data} = props;
    console.log(props);
    return (
        <div>
            {data.map((item)=>{
                return (
                    <div key={item.card.info.id} className="p-2 m-2 border border-gray-200 border-b-2 text-left flex">
                      
                        <div className="w-9/12">
                            <div className="flex justify-between">
                                <span>{item.card.info.name}</span>
                                <span>₹{item.card.info.price/100}</span>
                            </div>
                            <div>
                                <span className="text-xs">{item.card.info.description}</span>
                            </div>
                        </div>
                        <div className="w-3/12 p-4 ">
                            <div className="absolute">
                                <button className="p-2 mx-16 rounded-lg shadow-lg bg-white">
                                    Add+
                                </button>
                            </div>
                            <img src={IMG_URL+item.card.info.imageId} className="w-full"></img>
                          
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ItemCards;