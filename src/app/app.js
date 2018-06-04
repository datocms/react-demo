import React, { Component } from "react";
import { render } from "react-dom";
import Routes from "./components/routes";
import "../assets/styles/style.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
