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
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const { GOOGLE_API_KEY } = process.env;
const categories_icons = [
  { name: "Restaurant", icon: "Chef-Hat" },
  { name: "Eat & Drinks", icon: "Hamburger" },
  { name: "Events", icon: "Electric-Guitar" },
  { name: "Nightlife", icon: "Electric-Guitar" },
  { name: "Hotel", icon: "Home-2" },
  { name: "Coffee", icon: "Coffee" }
];
const ny = { lat: 40.7127753, lng: -74.0059728 };
const MyMapComponent = compose(
  withScriptjs,
  withGoogleMap,

)(props => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={ny} ref={props.onMapMounted}>
      {props.items && props.items.map(item => (
        <Marker
          key={item.id}
          position={{
            lat: item.location.latitude,
            lng: item.location.longitude
          }}

        >

            <InfoWindow onCloseClick={props.onToggleOpen}>
              <InfoBoxDetail item={item} />
            </InfoWindow>

        </Marker>
      ))}
    </GoogleMap>
  );
});


/*
withHandlers({
    onMapMounted: props => ref => {
      console.log("MOUNTED");
      //const bounds = new google.maps.LatLngBounds();
      // props.items.forEach(item => {
      //   bounds.extend({
      //     lat: item.location.latitude,
      //     lng: item.location.longitude
      //   });
      // });
      // ref && ref.fitBounds(bounds);
    }
  })*/



/*
 <InfoBox
            style={{
              width: `250px`,
              height: `250px`,
              backgroundColor: `#fff`,
              opacity: 0.75,
              padding: `12px`,
              borderRadius: `10px`
            }}
          >

          </InfoBox>


const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div id="map-container" style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}

    <Marker
      position={{ lat: 22.6273, lng: 120.3014 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoBox
          onCloseClick={props.onToggleOpen}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div
            style={{
              backgroundColor: `yellow`,
              opacity: 0.75,
              padding: `12px`
            }}
          >
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              Hello, Kaohsiung!
            </div>
          </div>
        </InfoBox>
      )}
    </Marker>
  </GoogleMap>
));
*/
export default class BigMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false
    };
  }
  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick() {
    console.log("click");
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }

  render() {
    let { items } = this.props;
    return (
      <div className="fs-inner-container map-fixed">
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
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
