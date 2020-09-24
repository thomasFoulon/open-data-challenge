import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './Map.css';

function MapContainer() {
  return (
    <Map center={[0, 0]} zoom={4}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}

export default MapContainer;
