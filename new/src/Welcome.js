import React from "react";
import Age from "./Age";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        <Age age={29} />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "Gino",
};
