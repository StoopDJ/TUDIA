// Code Ref: https://www.npmjs.com/package/google-map-react
// Documentation Ref: https://developers.google.com/maps/documentation/javascript/react-map

// import all React components here
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// style for the map, such as width, height
let mapStyles = {
  width: "100%",
  height: "70%",
  marginTop: "20%",
};

// Map Component to contain the map
export class ContactMap extends Component {
  render() {
    return (
      // TUD Grangegorman Location(  lat: 53.355087777928865,lng: -6.279539973026446)
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 53.355087777928865,
          lng: -6.279539973026446,
        }}
        // Add the Mao style here
        style={mapStyles}
        //Zoom 14 anything bigger would look weird 
        zoom={14}
      >
        {/* add a Marker on the map shows TUD Grangegorman */}
        <Marker onClick={this.onMarkerClick} name={"Grangegorman Campus"} />
        {/* Future Work we can add other campuses*/}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDKEWXXEHBjT2oFnalsNuzJM2PGgyBt_m4",
})(ContactMap);
