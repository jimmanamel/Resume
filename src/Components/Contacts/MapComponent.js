import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

import { useMediaQueryContext } from "../../MediaQueryContext";

const markers = [
  {
    id: 1,
    name: "Kottayam, Kerala",
    position: { lat: 9.590730362970893, lng: 76.52059147231779 },
  },
  {
    id: 2,
    name: "Denver, Colorado",
    position: { lat: 9.619382048763448, lng: 76.4765726306015 },
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 9.598011652967811, lng: 76.58509603421938 },
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 9.55586175820753, lng: 76.51404614699132 },
  },
];

//https://codesandbox.io/p/sandbox/react-google-maps-api-multiple-markers-infowindow-slp2pr?file=%2Fsrc%2FMap.js%3A10%2C3-24%2C4

function MapComponent() {
  const [activeMarker, setActiveMarker] = useState(null);

  const { isDesktop } = useMediaQueryContext();

  const width = isDesktop ? "550px" : "240px";
  const height = isDesktop ? "400px" : "200px";
  const margin = isDesktop ? "5px" : "0px";

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width, height, margin }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default MapComponent;
