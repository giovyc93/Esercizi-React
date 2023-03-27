import React from "react";

class Container extends React.Component{
render (){
    return(
    <div className="container"> 
    <div className="container title">
        {this.props.title}
    </div>
    {this.props.children}
    </div>
    )
}
}
export default Container