import React, { Component } from "react";
import "./App.css";
import Header from "./Header";

class App extends Component {
  state = {
    count: 10
  }; 
  componentDidMount = () => {
    console.log("App.js > Component really did mount")
    this.plus()
  }
  plus = () => {
    console.log("Plus");
    let num = this.state.count + 1;
    this.setState({ count: num });
  };
  minus = () => {
    console.log("Minus");
    let num = this.state.count - 1;
    this.setState({ count: num });
  };
  render() {
    return (
      <div className="App">
        <Header countRL={this.state.count}/>
        <p>Count = {this.state.count}</p>
        <p>Click any of the buttons below.</p>
        <button onClick={() => this.plus()}> Plus </button>
        <button onClick={() => this.minus()}> Minus </button>
      </div>
    );
  }
}

export default App;
