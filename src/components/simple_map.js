import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{
      lat: props.item.location.latitude,
      lng: props.item.location.longitude
    }}
  >
    <Marker
      position={{
        lat: props.item.location.latitude,
        lng: props.item.location.longitude
      }}
    />
  </GoogleMap>
));

export default class SimpleMap extends Component {
  render() {
    console.log("SIMPLE MAP", this.props.detail);
    return (
      <div id="singleListingMap" style={{ height: "300px", width: "100%" }}>
        <MyMapComponent item={this.props.detail} />
      </div>
    );
  }
}
