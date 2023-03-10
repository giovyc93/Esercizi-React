import React from "react";



class Age extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Your age is </p>
        {this.props.age > 18 && this.props.age}
      </div>
    );
  }
}
export default Age;