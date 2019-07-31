import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
    state = {
        countRL: 5
    }
    componentDidMount = () => {
        console.log("Header.js > Component really did mount")
      }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.countRL}</p>
        </header>
      </div>
    );
  }
}

export default Header;
