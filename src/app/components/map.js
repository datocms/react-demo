import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <div className="fs-inner-container map-fixed">
        <div id="map-container">
          <div id="map" data-map-zoom="9" data-map-scroll="true" />
        </div>
      </div>
    );
  }
}
