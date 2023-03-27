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
import GithubUser from "./GithubUser";

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
        <Counter />
        <ClickCounter onCounterChange = {(counter)=> {
                         console.log(counter)
                    }}/>
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
          <GithubUser />
        <LanguageComponent />
        <Container title="this is a component composition " />
        <Sum />
        <GithubUserList />
      </div>
    );
  }
}
export default App