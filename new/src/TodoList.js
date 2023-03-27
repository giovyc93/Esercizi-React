import React from "react";


class TodoList extends React.Component{
    state = {items :["HTML", "CSS", "JS", "REACT"],
    newList : null,
    addBtn : true,

}

    handleInput = (event) => {
        this.setState({
                newList: event.target.value,
                addBtn: !event.target.value.trim()
        })
      }
      handleBtn = ()=>{
        this.setState({
          items: [...this.state.items, this.state.newList],
          newList: ''
        })
      }
    
    render(){
        return(
            <>
            <ul>{this.state.items.map((items, index) => <li key={index}>{items}</li>)}</ul>
            <input name='todo' type='text' onChange={this.handleInput} value={this.state.newList} ></input>
        <button type='button' onClick={this.handleBtn} disabled={this.state.addBtn}>Add </button>
            </>
        )
    }
}

export default TodoList;