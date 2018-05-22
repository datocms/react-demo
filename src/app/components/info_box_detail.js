import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
export default class InfoBoxDetail extends Component {
  render() {
    let { item } = this.props;
    return (
      <div>
        <Link to={"/detail/" + item.id} className="listing-img-container">
          {/*
          <div className="infoBox-close">
            <i className="fa fa-times" />
          </div>
          */}
          <img
            src={item.coverImage.url}
            style={{
              width: `240px`,
              height: `160px`,
              marginBottom: `20px`
            }}
          />
          <div className="listing-item-content">
            <h3>{item.name}</h3>
            <span>{item.address}</span>
          </div>
        </Link>
        <div className="listing-content">
          <div className="listing-title">
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
                >
                  {item.category.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
