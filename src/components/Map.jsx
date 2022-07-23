import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import '@stylesComponents/Map.css';

function Map() {

  const defaultCenter = {
    lat: 51.505, lng: -0.09
  }
  
  return (
    <div className="leaflet-container">
      <MapContainer 
        center={defaultCenter}
        zoom={16}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a target="_BLANK" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={defaultCenter} />
      </MapContainer> 
    </div>
  );
}
export default Map;