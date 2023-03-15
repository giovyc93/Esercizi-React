import React from "react";
import Age from "./Age";

export class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    if (name === "John" && age > 18 && age < 65) {
      return (
        <div>
          <p>
            Welcome, <strong>{name}</strong>
          </p>
          <Age age={age} />
        </div>
      );
    } else {
      return (
        <div>
          <p>
            Welcome, <strong>{name}</strong>
          </p>
        </div>
      );
    }
  }
}

Welcome.defaultProps = {
  name: "Gino",
};