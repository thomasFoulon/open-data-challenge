import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Choropleth from 'react-leaflet-choropleth';

import 'leaflet/dist/leaflet.css';
import './Map.css';

import topology from '../../assets/json/countries-50m.json';

const style = {
  weight: 1,
  color: 'darkgrey',
  fillOpacity: 0.7,
};

const styleHovered = {
  weight: 2,
  color: 'white',
};

const mapBounds = [
  [89, 179],
  [-89, -179],
];

function getRank(country, scores) {
  const currentScore = scores.find(
    (element) => element.id === country.id || element.name === country.properties.name
  );
  if (currentScore === undefined || currentScore.score === undefined) {
    return 0;
  }
  if (Number.isNaN(currentScore.score)) {
    return 0;
  }
  return currentScore.score;
}

function MapContainer({ scores, onClickOnCountry }) {
  return (
    <Map
      id="Map"
      center={[46.227638, 2.213749]}
      zoom={2}
      maxZoom={6}
      minZoom={2}
      maxBounds={mapBounds}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri"
        noWrap
        bounds={mapBounds}
      />
      <Choropleth
        data={topology}
        valueProperty={(country) => getRank(country, scores)}
        scale={['#b3cde0', '#011f4b']}
        steps={7}
        mode="e"
        style={style}
        onClick={(event) => {
          onClickOnCountry(event.layer.feature.id);
        }}
        onMouseOver={(e) => {
          e.layer.bindTooltip(`${e.layer.feature.properties.name} <br /> ${getRank(e.layer.feature, scores)}`);
          e.layer.openTooltip(e.latlng);
          e.layer.setStyle(styleHovered);
        }}
        onMouseOut={(e) => {
          e.layer.closeTooltip();
          e.layer.setStyle(style);
        }}
        onMouseMove={(e) => {
          e.layer.getTooltip().setLatLng(e.latlng);
        }}
      />
    </Map>
  );
}

export default MapContainer;
