import React from 'react';


class CounterDisplay extends React.Component{
    render() {
        return <h1>{this.props.count}</h1>
    }
}

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
    return <CounterDisplay count={this.state.count}/>
  }
}

export default Counter;