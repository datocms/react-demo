import React, { Component } from "react";
export default class Contact extends Component {
  render() {
    let { owner } = this.props;
    return (
      <div className="boxed-widget margin-top-35">
        <div className="hosted-by-title">
          <h4>
            <span>Hosted by</span>
            <a href={`/user/${owner.id}`}>{owner.fullName}</a>
          </h4>
          <a href="pages-user-profile.html" className="hosted-by-avatar">
            <img src={owner.image.url} alt="" />
          </a>
        </div>
        <ul className="listing-details-sidebar">
          <li>
            <i className="sl sl-icon-phone" /> {owner.phoneNumber}
          </li>
          <li>
            <i className="sl sl-icon-globe" />{" "}
            <button>http://example.com</button>
          </li>
          <li>
            <i className="fa fa-envelope-o" />{" "}
            <a
              target="_blank"
              href={`mailto:${owner.emailAddress}`}
              rel="noopener noreferrer"
            >
              <span className="__cf_email__">{owner.emailAddress}</span>
            </a>
          </li>
        </ul>

        <ul className="listing-details-sidebar social-profiles">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={owner.facebookProfilePage}
              className="facebook-profile"
            >
              <i className="fa fa-facebook-square" /> Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={owner.twitterProfilePage}
              className="twitter-profile"
            >
              <i className="fa fa-twitter" /> Twitter
            </a>
          </li>
        </ul>

        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
          <div className="small-dialog-header">
            <h3>Send Message</h3>
          </div>
          <div className="message-reply margin-top-0">
            <textarea cols="40" rows="3" placeholder="Your message to Tom" />
            <button className="button">Send Message</button>
          </div>
        </div>

        <button className="send-message-to-owner button popup-with-zoom-anim">
          <i className="sl sl-icon-envelope-open" /> Send Message
        </button>
      </div>
    );
  }
}
