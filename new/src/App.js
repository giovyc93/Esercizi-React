import Hello from "./Hello";
import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter"
import UncontrolledLogin from "./UncrontrolledLogin";
import Container from "./Container";
import Login from "./Login";

import TodoList from "./TodoList";

export class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={29} />
        < ClickTracker />
        <InteractiveWelcome />
        <Login />
        <Counter initialValue={5} incrementInterval={500} incrementAmount={2} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin={this.onLogin} />
        <UncontrolledLogin />
        <TodoList />
        <Container />
      </div>
    );
  }
}
export default App