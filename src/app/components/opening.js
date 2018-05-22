import React, { Component } from "react";

export default class Opening extends Component {
  render() {
    let { openingHours } = this.props;
    return (
      <div className="boxed-widget opening-hours margin-top-35">
        <div className="listing-badge now-open">Now Open</div>
        <h3>
          <i className="sl sl-icon-clock" /> Opening Hours
        </h3>
        <ul>
          <li>
            Monday <span>{openingHours.monday}</span>
          </li>
          <li>
            Tuesday <span>{openingHours.tuesday}</span>
          </li>
          <li>
            Wednesday <span>{openingHours.wednesday}</span>
          </li>
          <li>
            Thursday <span>{openingHours.thursday}</span>
          </li>
          <li>
            Friday <span>{openingHours.friday}</span>
          </li>
          <li>
            Saturday <span>{openingHours.saturday}</span>
          </li>
          <li>
            Sunday <span>{openingHours.sunday}</span>
          </li>
        </ul>
      </div>
    );
  }
}
