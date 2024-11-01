import "./App.css";
import Counter from "./Count/Counter";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter diff={1} />
      </div>
    );
  }
}

export default App;
