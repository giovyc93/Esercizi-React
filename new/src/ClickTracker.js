import React from "react";

class ClickTracker extends React.Component {


  state = { button: ""};

  handlerBtn = (event) => {
    this.setState(() => {
      return {
        button: event.target.name,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>button click: {this.state.button}</h1>
        <button name="btn 1" onClick={this.handlerBtn}>btn 1</button>
        <button name="btn 2" onClick={this.handlerBtn}>btn 2</button>
        <button name="btn 3" onClick={this.handlerBtn}>btn 3</button>
      </div>
    );
  }
}


export default ClickTracker;