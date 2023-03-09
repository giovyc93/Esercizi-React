import { Hello } from "./Hello";
import React from "react";
import { Welcome } from "./Welcome";
import { Age } from "./Age";

export class App extends React.Component {
  render() {
    return <div>
      <Hello/>
      <Welcome name= "Giovanni" />
      <Age age= {29}/>
    
    </div>;
  }
}
