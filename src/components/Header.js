import { LOGO_URL } from "../utils/constants";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    //1) If no dependency array is being passed , then useEffect will be called in each component render.
    //2) If there is an empty dependency array - then the callback function of the useEffect will be called only once after the initial render
    //3) If we pass btnName or any other dependeny to the dependency array - then the useEffect callback function will be called everytime btnName changes
    useEffect(()=>{
        console.log("header useEffect called ! ");
    },[btnName]);
    console.log("Header rendered");
    return (
        <div className="header">
            <div >
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div  className="nav-items">
                <ul>
                    <li>Online status : {useOnlineStatus() ? "online":"offline"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li>
                        <button onClick={()=>{
                             btnName === "Login"?setBtnName("Logout"):setBtnName("Login");
                            }}>{btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;