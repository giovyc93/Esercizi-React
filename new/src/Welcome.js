import React from "react";
import Age from "./Age";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, age } = this.props;

      return (
        <div>
          <p>
            Welcome, <strong>{name}</strong>
          </p>
          {age && <Age age={age} />}
        </div>
      );
    }
  }
Welcome.defaultProps = {
  name: "Gino",
};
