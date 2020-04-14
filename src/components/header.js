import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header id="header-container" className="fixed fullwidth">
        <div id="header" className="not-sticky">
          <div className="container">
            <div className="left-side">
              <div id="logo">
                <Link to={`/`}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>

              <div className="clearfix" />
            </div>
            <div className="right-side">
              <div className="header-widget" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
