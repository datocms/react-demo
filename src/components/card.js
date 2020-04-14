import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    let { item, index } = this.props;
    let cn = "col-lg-6 col-md-6";
    if (index > 1) cn = "col-lg-6 col-md-12";
    let cn_rating = "high";
    if (item.rating < 3) cn_rating = "low";
    if (item.rating === 3) cn_rating = "mid";
    return (
      <div className={cn}>
        <Link
          to={`/detail/${item.id}`}
          className="listing-item-container compact"
          data-marker-id={item.id}
        >
          <div className="listing-item">
            <img src={item.coverImage.url} alt="" />

            {item.category.name.toLowerCase() === "event" && (
              <div className="listing-item-details">
                <ul>
                  <li>{item.when}</li>
                </ul>
              </div>
            )}

            {item.category.name.toLowerCase() !== "event" && (
              <div className="listing-badge now-open">Now Open</div>
            )}

            <div className="listing-item-content">
              <div
                className={`numerical-rating ${cn_rating}`}
                data-rating={item.rating}
              />
              <h3>
                {item.name} {item.verified && <i className="verified-icon" />}
              </h3>
              <span>{item.address}</span>
            </div>
            <span className="like-icon" />
          </div>
        </Link>
      </div>
    );
  }
}
