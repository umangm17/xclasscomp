import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseCount = () => {
    this.setState((prevState, prevProps) => {
      return {
        counter: prevState.counter + prevProps.diff,
      };
    });
  };
  decreaseCount = () => {
    this.setState((prevState, prevProps) => {
      return {
        counter: prevState.counter - prevProps.diff,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.counter}</p>
        <button onClick={this.increaseCount}>Increment</button>
        <button onClick={this.decreaseCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
