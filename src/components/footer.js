import React, { Component } from "react";
import logo from "../assets/images/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className="margin-top-15">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6">
              <img className="footer-logo" src={logo} alt="" />
              <p>
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                ultricies laoreet ullamcorper phasellus semper.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 ">
              <div className="clearfix" />
            </div>

            <div className="col-md-3  col-sm-12">
              <h4>Contact Us</h4>
              <div className="text-widget">
                <span>12345 Little Lonsdale St, Melbourne</span>
                Phone: <span>(123) 123-456 </span>
                E-Mail:
                <span>
                  <span
                    className="__cf_email__"
                    data-cfemail="4e212828272d2b0e2b362f233e222b602d2123"
                  >
                    [email&#160;protected]
                  </span>
                </span>
              </div>

              <ul className="social-icons margin-top-20">
                <li>
                  <button className="facebook">
                    <i className="icon-facebook" />
                  </button>
                </li>
                <li>
                  <button className="twitter">
                    <i className="icon-twitter" />
                  </button>
                </li>
                <li>
                  <button className="gplus">
                    <i className="icon-gplus" />
                  </button>
                </li>
                <li>
                  <button className="vimeo">
                    <i className="icon-vimeo" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyrights">
                © {new Date().getUTCFullYear()} Listeo. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
