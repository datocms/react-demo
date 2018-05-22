import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import NavBar from "./nav_bar";
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
                  <img src={logo} />
                </Link>
              </div>
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>

              <NavBar />

              <div className="clearfix" />
            </div>
            <div className="right-side">
              <div className="header-widget">
                <a href="#" className="sign-in popup-with-zoom-anim">
                  <i className="sl sl-icon-login" /> Sign In
                </a>
                <a href="#" className="button border with-icon">
                  Add Listing <i className="sl sl-icon-plus" />
                </a>
              </div>
            </div>
            <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
              <div className="small-dialog-header">
                <h3>Sign In</h3>
              </div>
              <div className="sign-in-form style-1">
                <ul className="tabs-nav">
                  <li className="">
                    <a href="#">Log In</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                </ul>
                <div className="tabs-container alt">
                  <div className="tab-content" id="tab1">
                    <form method="post" className="login">
                      <p className="form-row form-row-wide">
                        <label htmlFor="username">
                          Username:
                          <i className="im im-icon-Male" />
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username"
                            value=""
                          />
                        </label>
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="password">
                          Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password"
                            id="password"
                          />
                        </label>
                        <span className="lost_password">
                          <a href="#">Lost Your Password?</a>
                        </span>
                      </p>
                      <div className="form-row">
                        <input
                          type="submit"
                          className="button border margin-top-5"
                          name="login"
                          value="Login"
                        />
                        <div className="checkboxes margin-top-10">
                          <input
                            id="remember-me"
                            type="checkbox"
                            name="check"
                          />
                          <label htmlFor="remember-me">Remember Me</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-content" id="tab2">
                    <form method="post" className="register">
                      <p className="form-row form-row-wide">
                        <label htmlFor="username2">
                          Username:
                          <i className="im im-icon-Male" />
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username2"
                          />
                        </label>
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="email2">
                          Email Address:
                          <i className="im im-icon-Mail" />
                          <input
                            type="text"
                            className="input-text"
                            name="email"
                            id="email2"
                            value=""
                          />
                        </label>
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="password1">
                          Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password1"
                            id="password1"
                          />
                        </label>
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="password2">
                          Repeat Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password2"
                            id="password2"
                          />
                        </label>
                      </p>
                      <input
                        type="submit"
                        className="button border fw margin-top-10"
                        name="register"
                        value="Register"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
