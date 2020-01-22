import React, { Component } from "react";

export default class Share extends Component {
  render() {
    return (
      <div className="listing-share margin-top-40 margin-bottom-40 no-border">
        <button className="like-button">
          <span className="like-icon" /> Bookmark this listing
        </button>
        <span>159 people bookmarked this place</span>

        <ul className="share-buttons margin-top-40 margin-bottom-0">
          <li>
            <a className="fb-share" href="#">
              <i className="fa fa-facebook" /> Share
            </a>
          </li>
          <li>
            <a className="twitter-share" href="#">
              <i className="fa fa-twitter" /> Tweet
            </a>
          </li>
          <li>
            <a className="gplus-share" href="#">
              <i className="fa fa-google-plus" /> Share
            </a>
          </li>
          <li>
            <a className="pinterest-share" href="#">
              <i className="fa fa-pinterest-p" /> Pin
            </a>
          </li>
        </ul>
        <div className="clearfix" />
      </div>
    );
  }
}
