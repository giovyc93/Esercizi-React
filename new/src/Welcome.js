import React from "react";
export class Welcome extends React.Component{
    constructor(props) {
        super(props);
      }
        render(){
            return <div>
            <p>Welcome, {this.props.name}</p>
            <p>Your age is {this.props.age}</p>
            </div>
    }
  }
   Welcome.defaultProps = {
    name :"Gino"
   }