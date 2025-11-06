import React from 'react';
class UserNewClass extends React.Component{
    constructor(props){
        console.log("UserNewClass Constructor");
        super(props);
        this.state = {
            userInfo :{
                name : "",
                location : ""
            }   
        }
    }
    async componentDidMount(){
        console.log("UserNewClass ComponentDidMount");
       const data = await fetch("https://api.github.com/users/nehaattrash");
       const json = await data.json();
       console.log(json);
       this.setState({
           userInfo : json
       });
    }

    // componentDidMount(){
    //    this.timer = setInterval(()=>{
    //     console.log("Namaste React");
    //    },1000)
    // }

    componentDidUpdate(prevProps,prevState){
        // if(this.state.count !== prevState.count){

        // }
        console.log("UserNewClass componentDidUpdate called");
    }
    componentWillUnmount(){
         // clearInterval(this.timer);
          console.log("UserNewClass componentWillUnmout called");
    }
    render(){
        console.log("UserNewClass Rendered");
        const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>User name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : nehaattrash@gmail.com</h4>
            </div>
        );
    }
}
export default UserNewClass;