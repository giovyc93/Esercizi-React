import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import Counter from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={29} />
        <Counter initialValue={5} incrementInterval={500} incrementAmount={2} />
      </div>
    );
  }
}

export default App;