import React from "react";

class TodoList extends React.Component {
  state = {
    items: ["HTML", "CSS", "JS"],
    newList: null,
    addBtn: true,
  };

  handleInput = (event) => {
    this.setState({
      newList: event.target.value,
      addBtn: !event.target.value.trim(),
    });
  };

  handleBtn = () => {
    this.setState({
      items: [...this.state.items, this.state.newList],
      newList: "",
    });
  };

  handleBtnReset = () => {
    this.setState({
      items: [],
    });
  };

  handleRemove = (event, remove) => {
    console.log(event.target, event.target.index);
    this.setState((state) => {
      return {
        items: state.items.filter((items, index) => index !== Number(remove)),
      };
    });
  };

  render() {
    return (
      <>
        {this.props.render(this.state.items, this.handleRemove)}
        <input
          name="todo"
          type="text"
          onChange={this.handleInput}
          value={this.state.newList}
        ></input>
        <button type="button" onClick={this.handleBtn} disabled={this.state.addBtn}>
          Add{" "}
        </button>
        <button onClick={this.handleBtnReset}>reset</button>
      </>
    );
  }
}

export default TodoList;