import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component{

state = { user: "" };

handlerUser = (event) => {
    this.setState({user: event.target.value}
    )
};

render(){
    return(
        <>
        <input name="username" value={this.state.user} onChange={this.handlerUser} />
        <Welcome name={this.state.user}/>
        </>
    )
}
}
export default InteractiveWelcome