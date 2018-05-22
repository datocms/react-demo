import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className="margin-top-15">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6">
              <img className="footer-logo" src={logo} />
              <p>
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                ultricies laoreet ullamcorper phasellus semper.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 ">
              <h4>Helpful Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="listings-single-page.html#">Login</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">Sign Up</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">My Account</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">Add Listing</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">Pricing</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">Privacy Policy</a>
                </li>
              </ul>

              <ul className="footer-links">
                <li>
                  <a href="listings-single-page.html#">FAQ</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">Blog</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">Our Partners</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">How It Works</a>
                </li>
                <li>
                  <a href="listings-single-page.html#">Contact</a>
                </li>
              </ul>
              <div className="clearfix" />
            </div>

            <div className="col-md-3  col-sm-12">
              <h4>Contact Us</h4>
              <div className="text-widget">
                <span>12345 Little Lonsdale St, Melbourne</span>
                Phone: <span>(123) 123-456 </span>
                E-Mail:<span>
                  {" "}
                  <a href="listings-single-page.html#">
                    <span
                      className="__cf_email__"
                      data-cfemail="4e212828272d2b0e2b362f233e222b602d2123"
                    >
                      [email&#160;protected]
                    </span>
                  </a>{" "}
                </span>
              </div>

              <ul className="social-icons margin-top-20">
                <li>
                  <a className="facebook" href="listings-single-page.html#">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="listings-single-page.html#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a className="gplus" href="listings-single-page.html#">
                    <i className="icon-gplus" />
                  </a>
                </li>
                <li>
                  <a className="vimeo" href="listings-single-page.html#">
                    <i className="icon-vimeo" />
                  </a>
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
