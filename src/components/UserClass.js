import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+" Child Constructor");
        this.state = {
            count1 : 1
        }
    }
    componentDidMount(){
        console.log(this.props.name+" Child Mounted");
    }
    render(){
         console.log(this.props.name+" Child Render");
        const {name,location} = this.props;
        const {count1} = this.state;
        return (
            <div className="user-card">
                <h1>Count : {count1}</h1>
                <button onClick={()=>{
                   this.setState({
                    count1 : this.state.count1 + 1 
                   });
                }}>Increase Count</button>
                <h2>User name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : nehaattrash@gmail.com</h4>
            </div>
        );
    }
}
export default UserClass;