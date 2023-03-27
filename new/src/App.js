import { Hello } from "./Hello";
import React from "react";
import { Welcome } from "./Welcome";
import {Counter } from "./Counter"
import ClickTracker from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={29} />
       < ClickTracker />
       <InteractiveWelcome/>
       <Login />
        <Counter initialValue={5} incrementInterval={500} incrementAmount={2} />
      </div>
    );
  }
}
export default App