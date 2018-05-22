import React, { Component } from "react";

export default class BookNow extends Component {
  render() {
    return (
      <div className="boxed-widget booking-widget margin-top-35">
        <h3>
          <i className="fa fa-calendar-check-o " /> Book a Table
        </h3>
        <div className="row with-forms  margin-top-0">
          <div className="col-lg-6 col-md-12">
            <input
              type="text"
              id="booking-date"
              data-lang="en"
              data-large-mode="true"
              data-large-default="true"
              data-min-year="2017"
              data-max-year="2020"
              data-lock="from"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <input type="text" id="booking-time" defaultValue="9:00 am" />
          </div>
          <div className="col-lg-12">
            <div className="panel-dropdown">
              <a href="listings-single-page.html#">
                Guests
                <span className="qtyTotal" name="qtyTotal">
                  1
                </span>
              </a>
              <div className="panel-dropdown-content">
                <div className="qtyButtons">
                  <div className="qtyTitle">Adults</div>
                  <input type="text" name="qtyInput" defaultValue="1" />
                </div>
                <div className="qtyButtons">
                  <div className="qtyTitle">Childrens</div>
                  <input type="text" name="qtyInput" defaultValue="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="pages-booking.html"
          className="button book-now fullwidth margin-top-5"
        >
          Book Now
        </a>
      </div>
    );
  }
}
