import React, { Component } from "react";
import Opening from "./opening";
import Contact from "./contact";
import Share from "./share";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-4 margin-top-75 sticky">
        {this.props.detail.verified && (
          <div
            className="verified-badge with-tip"
            data-tip-content="Listing has been verified and belongs the business owner or manager."
          >
            <i className="sl sl-icon-check" /> Verified Listing
          </div>
        )}

        <Opening openingHours={this.props.detail.openingHours} />
        <Contact owner={this.props.detail.owner} />
        <Share />
      </div>
    );
  }
}
