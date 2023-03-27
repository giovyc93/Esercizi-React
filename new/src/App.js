import { Hello } from "./Hello";
import React from "react";
import { Welcome } from "./Welcome";
import {Counter } from "./Counter"
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import InteractiveWelcome from "./Interactive Welcome";
import Login from "./Login";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={29} />
        <Counter initialValue={5} incrementInterval={500} incrementAmount={2} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome/>
        <Login onLogin={this.onLogin}  />
      </div>
    );
  }
}
export default App