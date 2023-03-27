import React from "react";
class ClickCounter extends React.Component {
  state = { count: 0 };

  handlerIncrement = () => {
    this.setState(() => {
      return {
        count: this.state.count + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h2>click: {this.state.count}</h2>
        <button onClick={this.handlerIncrement}>+</button>
      </>
    );
  }
}

export default ClickCounter;