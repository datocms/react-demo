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
            <button className="fb-share">
              <i className="fa fa-facebook" /> Share
            </button>
          </li>
          <li>
            <button className="twitter-share">
              <i className="fa fa-twitter" /> Tweet
            </button>
          </li>
          <li>
            <button className="gplus-share">
              <i className="fa fa-google-plus" /> Share
            </button>
          </li>
          <li>
            <button className="pinterest-share">
              <i className="fa fa-pinterest-p" /> Pin
            </button>
          </li>
        </ul>
        <div className="clearfix" />
      </div>
    );
  }
}
