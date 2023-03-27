import { Hello } from "./Hello";
import React from "react";
import { Welcome } from "./Welcome";
import {Counter } from "./Counter"

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
       <InteractiveWelcome/>
       <Login />
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