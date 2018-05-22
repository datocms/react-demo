import React, { Component } from "react";

const MARKER_SIZE = 40;
const greatPlaceStyle = {
  position: "absolute",
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE / 2
};

export default class Marker extends Component {
  render() {
    return <div style={greatPlaceStyle}>{this.props.text}</div>;
  }
}
