import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 10
  }
  plus = () => {
    console.log("Plus")
    let num = this.state.count + 1
    this.setState({count: num})
  }
  minus = () => {
    console.log("Minus")
    let num = this.state.count - 1
    this.setState({count: num})
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Count = {this.state.count}
          </p>
        <p>
          Click any of the buttons below.
        </p>
        <button onClick={() => this.plus()}> Plus </button>
        <button onClick={() => this.minus()}> Minus </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
