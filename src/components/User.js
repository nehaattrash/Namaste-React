import { useState } from "react";

const User = ({name}) => {
    const [count1] = useState(1);
     const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>Count1 : {count1}</h1>
             <h1>Count2 : {count2}</h1>
            <h2>User name : {name}</h2>
            <h3>Location : New Delhi</h3>
            <h4>Contact : nehaattrash@gmail.com</h4>
        </div>
    );
}
export default User;