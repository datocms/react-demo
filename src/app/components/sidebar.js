import React, { Component } from "react";
import BookNow from "./book_now";
import Opening from "./opening";
import Contact from "./contact";
import Share from "./share";

export default class Sidebar extends Component {
  render() {
    console.log("SIDEBAR", this.props.detail);
    return (
      <div className="col-lg-4 col-md-4 margin-top-75 sticky">
        <div
          className="verified-badge with-tip"
          data-tip-content="Listing has been verified and belongs the business owner or manager."
        >
          <i className="sl sl-icon-check" /> Verified Listing
        </div>
        <BookNow />
        <Opening openingHours={this.props.detail.openingHours} />
        <Contact owner={this.props.detail.owner} />
        <Share />
      </div>
    );
  }
}
