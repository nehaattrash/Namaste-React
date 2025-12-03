import React, { lazy , Suspense, useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { API_URL } from "./utils/constants";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
const AppLayout = () =>{
    console.log("App Layout is rendered");
    const [userName, setUserName] = useState("");
    useEffect(()=>{
        //authentication api will be hit with username and password 
        const data = {
            name : "Neha Gupta"
        }
        setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
                <div className="container">
                    {/* <UserContext.Provider value={{loggedInUser:"Elon Musk"}}> */}
                    <Header/>
                    {/* </UserContext.Provider>                 */}
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
       path : "/",
       element : <AppLayout/> ,
       children : [
            {
                path : "/",
                element : <Body/> 
            },
            {
                path : "/about",
                element : <Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu/>
            }
            ,
            {
                path : "/cart",
                element : <Cart/>
            }
       ],
       errorElement : <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);