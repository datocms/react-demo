import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const GOOGLE_API_KEY = "AIzaSyAgeuuDfRlweIs7D6uo4wdIHVvJ0LonQ6g";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
  render() {
    let pos = {
      center: {
        lat: 40.70437865245596,
        lng: -73.98674011230469
      },
      zoom: 11
    };
    return (
      <div id="singleListingMap" style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={pos.center}
          defaultZoom={pos.zoom}
          mapIcon="im im-icon-Hamburger"
        >
          <AnyReactComponent
            lat={40.70437865245596}
            lng={-73.98674011230469}
            text={"im im-icon-Hamburger"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
