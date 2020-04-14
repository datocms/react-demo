import React, { Component } from "react";

import r1 from "../assets/images/review-image-03.jpg";
import r2 from "../assets/images/review-image-02.jpg";

export default class ReviewList extends Component {
  render() {
    return (
      <div id="listing-reviews" className="listing-section">
        <h3 className="listing-desc-headline margin-top-75 margin-bottom-20">
          Reviews <span>(12)</span>
        </h3>

        <div className="clearfix" />

        <section className="comments listing-reviews">
          <ul>
            <li>
              <div className="avatar">
                <img
                  src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                  alt=""
                />
              </div>
              <div className="comment-content">
                <div className="arrow-comment" />
                <div className="comment-by">
                  Kathy Brown<span className="date">June 2017</span>
                  <div className="star-rating" data-rating="5" />
                </div>
                <p>
                  Morbi velit eros, sagittis in facilisis non, rhoncus et erat.
                  Nam posuere tristique sem, eu ultricies tortor imperdiet
                  vitae. Curabitur lacinia neque non metus
                </p>

                <div className="review-images mfp-gallery-container">
                  <button className="mfp-gallery">
                    <img src={r1} alt="" />
                  </button>
                </div>
                <button className="rate-review">
                  <i className="sl sl-icon-like" /> Helpful Review{" "}
                  <span>12</span>
                </button>
              </div>
            </li>

            <li>
              <div className="avatar">
                <img
                  src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                  alt=""
                />{" "}
              </div>
              <div className="comment-content">
                <div className="arrow-comment" />
                <div className="comment-by">
                  John Doe<span className="date">May 2017</span>
                  <div className="star-rating" data-rating="4" />
                </div>
                <p>
                  Commodo est luctus eget. Proin in nunc laoreet justo volutpat
                  blandit enim. Sem felis, ullamcorper vel aliquam non, varius
                  eget justo. Duis quis nunc tellus sollicitudin mauris.
                </p>
                <button className="rate-review">
                  <i className="sl sl-icon-like" /> Helpful Review{" "}
                  <span>2</span>
                </button>
              </div>
            </li>

            <li>
              <div className="avatar">
                <img
                  src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                  alt=""
                />
              </div>
              <div className="comment-content">
                <div className="arrow-comment" />
                <div className="comment-by">
                  Kathy Brown<span className="date">June 2017</span>
                  <div className="star-rating" data-rating="5" />
                </div>
                <p>
                  Morbi velit eros, sagittis in facilisis non, rhoncus et erat.
                  Nam posuere tristique sem, eu ultricies tortor imperdiet
                  vitae. Curabitur lacinia neque non metus
                </p>

                <div className="review-images mfp-gallery-container">
                  <button href="#">
                    <img src={r2} alt="" />
                  </button>
                </div>
                <button className="rate-review">
                  <i className="sl sl-icon-like" /> Helpful Review{" "}
                  <span>4</span>
                </button>
              </div>
            </li>

            <li>
              <div className="avatar">
                <img
                  src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                  alt=""
                />{" "}
              </div>
              <div className="comment-content">
                <div className="arrow-comment" />
                <div className="comment-by">
                  John Doe<span className="date">May 2017</span>
                  <div className="star-rating" data-rating="5" />
                </div>
                <p>
                  Commodo est luctus eget. Proin in nunc laoreet justo volutpat
                  blandit enim. Sem felis, ullamcorper vel aliquam non, varius
                  eget justo. Duis quis nunc tellus sollicitudin mauris.
                </p>
                <button className="rate-review">
                  <i className="sl sl-icon-like" /> Helpful Review
                </button>
              </div>
            </li>
          </ul>
        </section>

        <div className="clearfix" />
        <div className="row">
          <div className="col-md-12">
            <div className="pagination-container margin-top-30">
              <nav className="pagination">
                <ul>
                  <li>
                    <button className="current-page">1</button>
                  </li>
                  <li>
                    <button href="#">2</button>
                  </li>
                  <li>
                    <button href="#">
                      <i className="sl sl-icon-arrow-right" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
