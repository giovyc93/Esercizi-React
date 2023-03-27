import Hello from "./Hello";
import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter"
import UncontrolledLogin from "./UncrontrolledLogin";
import Container from "./Container";
import Login from "./Login";
import ClickTracker from "./ClickTracker";
import LanguageComponent from "./LanguageContext";
import TodoList from "./TodoList";
import Sum from "./Sum";

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
        <TodoList
          render={(items, handleRemove) => (
            <ul>
              {items.map((item, index) => (
                <li key={item + index}>
                  {item}
                  <button type="button" onClick={(event) => handleRemove(event, index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        />
        <LanguageComponent />
        <Container title="this is a component composition " />
        <Sum />
      </div>
    );
  }
}
export default App