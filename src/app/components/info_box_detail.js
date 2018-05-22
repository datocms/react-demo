import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const categories_icons = [
  { name: "Restaurant", icon: "Chef-Hat" },
  { name: "Eat & Drinks", icon: "Hamburger" },
  { name: "Events", icon: "Electric-Guitar" },
  { name: "Nightlife", icon: "Electric-Guitar" },
  { name: "Hotel", icon: "Home-2" },
  { name: "Coffee", icon: "Coffee" }
];

export default class InfoBoxDetail extends Component {
  getIcon(name) {
    console.log("get icon", name);
    let e = null;
    if (name) e = categories_icons.find(cat => cat.name == name);
    if (e && e.icon) return "im im-icon-" + e.icon;

    return "";
  }

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
          {/*
          <div className="infoBox-close">
            <i className="fa fa-times" />
          </div>
          */}
          <img
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
              <span>
                <i className={this.getIcon(item.category.name)} />
              </span>
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
