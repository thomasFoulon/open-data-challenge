import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Choropleth from 'react-leaflet-choropleth';

import 'leaflet/dist/leaflet.css';
import './Map.css';

import topology from '../../context/countries-50m.json';

const style = {
  fillColor: '#F28F3B',
  weight: 1,
  color: 'grey',
  fillOpacity: 0.5
};

function getRank(feature) {
  return feature.properties.name.length;
}

function setEventOnEachFeature(feature, layer) {
  layer.bindTooltip(`${feature.properties.name} <br/> ${getRank(feature)}`);
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

function MapContainer() {
  return (
    <Map id="Map" center={[0, 0]} zoom={4}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Choropleth
        data={topology}
        valueProperty={(feature) => getRank(feature)}
        scale={['#b3cde0', '#011f4b']}
        steps={7}
        mode="e"
        style={style}
        onEachFeature={(feature, layer) => { setEventOnEachFeature(feature, layer); }}
      />
    </Map>
  );
}

export default MapContainer;
