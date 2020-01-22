import React, { Component } from "react";

export default class BookNow extends Component {
  render() {
    return (
      <div className="boxed-widget booking-widget margin-top-35">
        <h3>
          <i className="fa fa-calendar-check-o " />Carts items
        </h3>
        <div className="row with-forms  margin-top-0">
          <div className="col-lg-6 col-md-12">
            <div className="snipcart-summary">
              <p>
                Number of items: <span className="snipcart-total-items" />
              </p>
              <p>
                Total price: <span className="snipcart-total-price" />
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
