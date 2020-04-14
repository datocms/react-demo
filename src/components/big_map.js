/* eslint-disable no-undef */
import React, { Component } from "react";
import { compose, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import InfoBoxDetail from "./info_box_detail";
import nightlife from "../assets/images/map_icons/nightlife.svg";
import coffee from "../assets/images/map_icons/coffee.svg";
import events from "../assets/images/map_icons/events.svg";
import hotel from "../assets/images/map_icons/hotel.svg";
import airport from "../assets/images/map_icons/airport.svg";
import food from "../assets/images/map_icons/food.svg";

const ny = { lat: 40.7127753, lng: -74.0059728 };
const MyMapComponent = compose(
  withScriptjs,
  withGoogleMap,
  withHandlers({
    onMapMounted: props => ref => {
      const bounds = new google.maps.LatLngBounds();
      if (props.items) {
        props.items.forEach(item => {
          bounds.extend({
            lat: item.location.latitude,
            lng: item.location.longitude
          });
        });

        ref && ref.fitBounds(bounds);
      }
    }
  })
)(props => {
  return (
    <GoogleMap defaultCenter={ny} defaultZoom={9} ref={props.onMapMounted}>
      {props.items &&
        props.items.map(item => {
          let icon = food;
          switch (item.category.name) {
            case "Airport":
              icon = airport;
              break;
            case "Events":
              icon = events;
              break;
            case "Nightlife":
              icon = nightlife;
              break;
            case "Hotels":
              icon = hotel;
              break;
            case "Coffee":
              icon = coffee;
              break;
            case "Eat & Drink":
              icon = food;
              break;
            default:
              icon = null;
              break;
          }
          return (
            <Marker
              key={item.id}
              position={{
                lat: item.location.latitude,
                lng: item.location.longitude
              }}
              onClick={() => props.onMarkerClick(item.id)}
              icon={icon}
            >
              {item.id === props.markerShown && (
                <InfoWindow>
                  <InfoBoxDetail item={item} />
                </InfoWindow>
              )}
            </Marker>
          );
        })}
    </GoogleMap>
  );
});

export default class BigMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerShown: -1
    };
  }

  handleMarkerClick(id) {
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
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
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
