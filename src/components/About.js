import { Component } from "react";
import UserClass from "./UserClass";
import Test from "./Test";
import UserNewClass from "./UserNewClass";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        //console.log("Parent Constructor")
    }
    componentDidMount(){
        //console.log("Parent Mounted");
    }
    render(){
       // console.log("Parent Render")
        return (
            <div>
                <h1>About Page</h1>
                {/* <UserClass name={"First"} location={"New Delhi (Class)"}/>
                <UserClass name={"Second"} location={"New Delhi (Class)"}/>
                <Test/> */}
                <UserNewClass name={"Neha"} location={"JSR"}/>
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
        );
    }
}

export default About;