import React from "react";
export class Welcome extends React.Component{
    constructor(props) {
        super(props);
      }
        render(){
            return <p>Welcome, {this.props.name}</p>
    }
  }
   Welcome.defaultProps = {
    name :"Gino"
   }