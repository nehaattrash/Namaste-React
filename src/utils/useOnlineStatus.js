import { useState,useEffect } from "react";

const useOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus] = useState(true);
    console.log("Before useOnlineStatus");
    useEffect(()=>{
        console.log("Inside useOnlineStatus useEffect");
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[]);
    console.log("After useOnlineStatus");
    return onlineStatus;
}
export default useOnlineStatus;