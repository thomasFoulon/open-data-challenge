import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Choropleth from 'react-leaflet-choropleth';

import 'leaflet/dist/leaflet.css';
import './Map.css';

import topology from '../../context/countries-50m.json';

const style = {
  fillColor: 'white',
  weight: 1,
  color: 'grey',
  fillOpacity: 0.5,

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

function setEventOnEachFeature(country, layer) {
  layer.bindTooltip(`${country.properties.name}`);
  layer.on('mouseover', (e) => {
    e.target.openTooltip(e.latlng);
  });
  layer.on('mouseout', (e) => {
    e.target.closeTooltip();
  });
  layer.on('mousemove', (e) => {
    e.target.getTooltip().setLatLng(e.latlng);
  });
}

function MapContainer(props) {
  const { scores } = props;
  return (
    <Map
      id="Map"
      center={[46.227638, 2.213749]}
      zoom={2}
      maxZoom={6}
      minZoom={2}
      maxBounds={mapBounds}
    >

      <Choropleth
        data={topology}
        valueProperty={(country) => getRank(country, scores)}
        scale={['red', 'orange', 'green']}
        steps={7}
        mode="e"
        style={style}
        onEachFeature={(country, layer) => {
          setEventOnEachFeature(country, layer, scores);
        }}
      />
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        noWrap
        bounds={mapBounds}

      />
      <div className="colorGradient-container">
        <span className="color-text--1">Mauvais</span>
        <div className="colorGradient" />
        <span className="color-text--2">Excellent</span>
      </div>
    </Map>
  );
}

export default MapContainer;
