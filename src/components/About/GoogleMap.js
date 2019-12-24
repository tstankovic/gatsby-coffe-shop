import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const GoogleMap = props => {
  const mapContainer = {
    position: "relative",
    width: "90%",
    height: "500px",
    margin: "auto",
    overflow: "hidden",
  }

  const mapStyles = {
    width: "100%",
    height: "100%",
  }

  return (
    <>
      <h1 className="display-4 text-center text-capitalize font-weight-bold pb-4">
        our location
      </h1>
      <section style={mapContainer}>
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
        </Map>
      </section>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBsAOJO7BeT9nHC1NsJU2keTG98kh_UVEA",
})(GoogleMap)
