import React, { Component } from "react";

export default class MyMarker extends Component {
  render() {
    //let {icon} = this.props
    return (
      <div className="map-marker-container">
        <div className="marker-container">
          <div className="marker-card">
            <div className="front face">
              <i className="im im-icon-Coffee" />
            </div>
            <div className="back face">
              <i className="im im-icon-Coffee" />
            </div>
            <div className="marker-arrow" />
          </div>
        </div>
      </div>
    );
  }
}
