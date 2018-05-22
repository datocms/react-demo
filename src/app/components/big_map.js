import React, { Component } from "react";
import { compose, withProps, withStateHandlers, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import InfoBoxDetail from "./info_box_detail";
import MyMarker from "./marker";
const { GOOGLE_API_KEY } = process.env;


const ny = { lat: 40.7127753, lng: -74.0059728 };
const MyMapComponent = compose(withScriptjs, withGoogleMap)(props => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={ny}>
      {props.items &&
        props.items.map(item => (
          <Marker
            key={item.id}
            position={{
              lat: item.location.latitude,
              lng: item.location.longitude
            }}
            onClick={() => props.onMarkerClick(item.id)}

          >
            {item.id == props.markerShown && (
              <InfoWindow>
                <InfoBoxDetail item={item} />
              </InfoWindow>
            )}
          </Marker>
        ))}
    </GoogleMap>
  );
});
//

export default class BigMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerShown: -1
    };
  }

  handleMarkerClick(id) {
    console.log("click");
    this.setState({ markerShown: id });
  }

  render() {
    let { items } = this.props;
    return (
      <div className="fs-inner-container map-fixed">
        <MyMapComponent
          markerShown={this.state.markerShown}
          onMarkerClick={this.handleMarkerClick.bind(this)}
          items={items}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div id="map-container" style={{ height: `100%` }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
