import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import {clearItem} from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=>(store.cart.items));
    // const store = useSelector((store)=>store);
    // const cartItems = store.cart.items;
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearItem());
    }
    return (
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="m-auto w-6/12">
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
                    Clear Cart</button>
                {cartItems.length===0 && <h1>Add Items to the Cart!</h1>}
                 <ItemCards data={cartItems}/>
            </div>
        </div>
    );
}
export default Cart;