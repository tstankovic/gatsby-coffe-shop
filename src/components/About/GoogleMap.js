import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

import Title from "../Globals/Title"

const GoogleMap = props => {
  const sectionStyles = {
    position: "relative",
    width: "90%",
    height: "500px",
    margin: "auto",
  }

  const mapStyles = {
    width: "100%",
    height: "80%",
  }

  return (
    <section className="py-3" style={sectionStyles}>
      <Title title="location" />
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    </section>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBsAOJO7BeT9nHC1NsJU2keTG98kh_UVEA",
})(GoogleMap)
