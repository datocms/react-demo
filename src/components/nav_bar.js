import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return null;

    return (
      <nav id="navigation" className="style-1">
        <ul id="responsive">
          <li>
            <Link to={`/`}>Menu</Link>
            <ul>
              <li>
                <Link to={`/`}>Home 1</Link>
              </li>
              <li>
                <Link to={`/`}>Home 3</Link>
              </li>
              <li>
                <Link to={`/`}>Home 3</Link>
              </li>
              <li>
                <Link to={`/`}>Home 4</Link>
              </li>
            </ul>
          </li>
          <li>
            <a className="current" href="#">
              Listings
            </a>
            <ul>
              <li>
                <a href="#">List Layout</a>
                <ul>
                  <li>
                    <a href="#">With Sidebar</a>
                  </li>
                  <li>
                    <a href="#">Full Width</a>
                  </li>
                  <li>
                    <a href="#">Full Width + Map</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Grid Layout</a>
                <ul>
                  <li>
                    <a href="#">With Sidebar 1</a>
                  </li>
                  <li>
                    <a href="#">With Sidebar 2</a>
                  </li>
                  <li>
                    <a href="#">Full Width</a>
                  </li>
                  <li>
                    <a href="#">Full Width + Map</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Half Screen Map</a>
                <ul>
                  <li>
                    <a href="#">List Layout</a>
                  </li>
                  <li>
                    <a href="#">Grid Layout 1</a>
                  </li>
                  <li>
                    <a href="">Grid Layout 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Single Listing 1</a>
              </li>
              <li>
                <a href="#">Single Listing 2</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Pages</a>
            <div className="mega-menu mobile-styles three-columns">
              <div className="mega-menu-section">
                <ul>
                  <li className="mega-menu-headline">Pages #1</li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-user" /> User Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-check" /> Booking Page
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-plus" /> Add Listing
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-docs" /> Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mega-menu-section">
                <ul>
                  <li className="mega-menu-headline">Pages #2</li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-envelope-open" /> Contact
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-hourglass" /> Coming Soon
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-close" /> 404 Page
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-equalizer" /> Masonry Filtering
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mega-menu-section">
                <ul>
                  <li className="mega-menu-headline">Other</li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-settings" /> Elements
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-tag" /> Pricing Tables
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-pencil" /> Typography
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="sl sl-icon-diamond" /> Icons
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
