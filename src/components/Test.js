import { Component } from "react";

class Test extends Component{
    constructor(props){
        super(props);
        console.log("Test constructor");
    }
    componentDidMount(){
          console.log("Test componentdidmount");
    }
    render(){
        console.log("Test render");
        return(
            <div>
                <h1>Testing</h1>
            </div>
        );
    }
}
export default Test;