import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

export default class InfoBoxDetail extends Component {
  render() {
    let { item } = this.props;
    return (
      <div
        style={{
          width: `240px`,
          padding: `10px`,
          background: `#f7f7f7`,
          margin: `0 auto`
        }}
      >
        <Link to={"/detail/" + item.id} className="listing-img-container">
          <img
            alt=""
            src={item.coverImage.url}
            style={{
              width: `100%`,
              height: `160px`,
              marginBottom: `10px`
            }}
          />
          <div className="listing-item-content">
            <h3>{item.name}</h3>
            <span>{item.address}</span>
          </div>
        </Link>
        <div className="listing-content">
          <div className="listing-title">
            <div>
              <span>{item.category.name}</span>
            </div>
            <h3>{item.name}</h3>
            <span>{item.address}</span>
            <div className="star-rating" data-rating={item.rating}>
              <div className="rating-counter">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={item.rating}
                />
                <Link
                  to={"/detail/" + item.id}
                  className="listing-img-container"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
