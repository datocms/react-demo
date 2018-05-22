import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const { GOOGLE_API_KEY } = process.env;

const categories_icons = [
  { name: "Restaurant", icon: "Chef-Hat" },
  { name: "Eat & Drinks", icon: "Hamburger" },
  { name: "Events", icon: "Electric-Guitar" },
  { name: "Nightlife", icon: "Electric-Guitar" },
  { name: "Hotel", icon: "Home-2" },
  { name: "Coffee", icon: "Coffee" }
];
const AnyReactComponent = ({ text }) => (
  <div style={{ width: "270px", height: "270px", color: "red" }}>
    <h1>{text}</h1>
  </div>
);

export default class BigMap extends Component {
  render() {
    let pos = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 9
    };

    let markers = [
      {
        latitude: 59.95,
        longitude: 30.33,
        id: 9999
      }
    ];

    return (
      <div className="fs-inner-container map-fixed">
        <div id="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            defaultCenter={pos.center}
            defaultZoom={pos.zoom}
          />

          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"AAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}
          />
        </div>
      </div>
    );
  }
}

/*
  {markers.map(marker => (
            <Marker
              position={{ lat: marker.latitude, lng: marker.longitude }}
              key={marker.id}
            />
          ))}
*/
