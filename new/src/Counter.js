import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialValue };
}

componentDidMount() {
  this.interval = setInterval(() => {
    this.setState((prevState) => ({ count: prevState.count + this.props.incrementAmount }));
  }, this.props.incrementInterval);
}
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;