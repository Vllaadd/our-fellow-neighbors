import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const Map = ({ treesData }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '500px'
  };

  const center = {
    lat: 40.682839,
    lng: -73.953972
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
      >
        {treesData.map((tree, index) => (
          <Marker
            key={index}
            position={{ lat: tree.lat, lng: tree.lng }}
            title={tree.type}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
