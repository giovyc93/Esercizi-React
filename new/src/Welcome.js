import React from "react";
export class Welcome extends React.Component{
    constructor(props) {
        super(props);
      }
        render(){
            return <div>
            <p>Welcome, <strong>{this.props.name}</strong></p>

            </div>
    }
  }
   Welcome.defaultProps = {
    name :"Gino"
   }