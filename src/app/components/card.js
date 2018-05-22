import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    let { item, index } = this.props;
    let cn = "col-lg-6 col-md-6";
    if (index > 1) cn = "col-lg-6 col-md-12";
    let cn_rating = "high";
    if (item.rating < 3) cn_rating = "low";
    if (item.rating == 3) cn_rating = "mid";
    return (
      <div className={cn}>
        <Link
          to={`/detail/${item.id}`}
          className="listing-item-container compact"
          data-marker-id={item.id}
        >
          <div className="listing-item">
            <img src={item.coverImage.url} />

            {item.category.name.toLowerCase() === "event" && (
              <div className="listing-item-details">
                <ul>
                  <li>{item.when}</li>
                </ul>
              </div>
            )}

            {item.category.name.toLowerCase() != "event" && (
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

/*




                  <div className="col-lg-6 col-md-6">
                    <Link
                      to="/detail/288573"
                      className="listing-item-container compact"
                      data-marker-id="1"
                    >
                      <div className="listing-item">
                        <img
                          src="../assets/images/listing-item-01.jpg"
                          alt=""
                        />
                        <div className="listing-badge now-open">Now Open</div>
                        <div className="listing-item-content">
                          <div className="numerical-rating" data-rating="3.5" />
                          <h3>
                            Toms Restaurant <i className="verified-icon" />
                          </h3>
                          <span>964 School Street, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <Link
                      to="/detail/288573"
                      className="listing-item-container compact"
                      data-marker-id="2"
                    >
                      <div className="listing-item">
                        <img
                          src="../assets/images/listing-item-02.jpg"
                          alt=""
                        />
                        <div className="listing-item-details">
                          <ul>
                            <li>Friday, August 10</li>
                          </ul>
                        </div>
                        <div className="listing-item-content">
                          <div className="numerical-rating" data-rating="5.0" />
                          <h3>Sticky Band</h3>
                          <span>Bishop Avenue, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <Link
                      to="/detail/288573"
                      className="listing-item-container compact"
                      data-marker-id="3"
                    >
                      <div className="listing-item">
                        <img
                          src="../assets/images/listing-item-03.jpg"
                          alt=""
                        />
                        <div className="listing-item-details">
                          <ul>
                            <li>Starting from $59 per night</li>
                          </ul>
                        </div>
                        <div className="listing-item-content">
                          <div className="numerical-rating" data-rating="2.0" />
                          <h3>Hotel Govendor</h3>
                          <span>778 Country Street, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <Link
                      to="/detail/288573"
                      className="listing-item-container compact"
                      data-marker-id="4"
                    >
                      <div className="listing-item">
                        <img
                          src="../assets/images/listing-item-04.jpg"
                          alt=""
                        />
                        <div className="listing-badge now-open">Now Open</div>
                        <div className="listing-item-content">
                          <div className="numerical-rating" data-rating="5.0" />
                          <h3>
                            Burger House <i className="verified-icon" />
                          </h3>
                          <span>2726 Shinn Street, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <Link
                      to="/detail/288573"
                      className="listing-item-container compact"
                      data-marker-id="5"
                    >
                      <div className="listing-item">
                        <img
                          src="../assets/images/listing-item-05.jpg"
                          alt=""
                        />
                        <div className="listing-item-content">
                          <div className="numerical-rating" data-rating="3.5" />
                          <h3>Airport</h3>
                          <span>1512 Duncan Avenue, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <Link
                      to="/detail/288573"
                      className="listing-item-container compact"
                      data-marker-id="6"
                    >
                      <div className="listing-item">
                        <img
                          src="../assets/images/listing-item-06.jpg"
                          alt=""
                        />
                        <div className="listing-badge now-closed">
                          Now Closed
                        </div>
                        <div className="listing-item-content">
                          <div className="numerical-rating" data-rating="4.5" />
                          <h3>Think Coffee</h3>
                          <span>215 Terry Lane, New York</span>
                        </div>
                        <span className="like-icon" />
                      </div>
                    </Link>
                  </div>
*/
