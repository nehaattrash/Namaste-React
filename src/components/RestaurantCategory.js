import ItemCards from "./ItemCards";

const RestaurantCategory = (props) =>{
    const {itemCards,title} = props?.categoryData;
    const {showItems} = props;
    const {setShowIndex} = props;
    const handleClick = () =>{
        setShowIndex();
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="font-bold text-lg">{title}({itemCards.length})</span>
                <span>V</span>
            </div>
            <div>
                {showItems &&<ItemCards data={itemCards}/>}
            </div>
        </div>
    );
}
export default RestaurantCategory;