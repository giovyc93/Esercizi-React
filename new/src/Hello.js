import React from "react";
import {Messaggio} from "./Message"

export class Hello extends React.Component {
  render() {
    return (
      <div>
        <Messaggio testo="What a beautiful day!" />
        <p>What a beautiful day!</p>
      </div>
    );
  }
}
