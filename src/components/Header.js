import { LOGO_URL } from "../utils/constants";
import {useState,useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    //1) If no dependency array is being passed , then useEffect will be called in each component render.
    //2) If there is an empty dependency array - then the callback function of the useEffect will be called only once after the initial render
    //3) If we pass btnName or any other dependeny to the dependency array - then the useEffect callback function will be called everytime btnName changes
    useEffect(()=>{
        console.log("header useEffect called ! ");
    },[btnName]);
    const {loggedInUser} = useContext(UserContext);
    console.log("Header rendered");
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100" >
            <div>
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div  className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online status : {useOnlineStatus() ? "online":"offline"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4">
                        <button onClick={()=>{
                             btnName === "Login"?setBtnName("Logout"):setBtnName("Login");
                            }}>{btnName}
                        </button>
                    </li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;