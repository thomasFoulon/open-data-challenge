import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Choropleth from 'react-leaflet-choropleth';
import ReactTooltip from 'react-tooltip';

import 'leaflet/dist/leaflet.css';
import './Map.css';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import topology from '../../assets/json/countries-50m.json';

const style = {
  weight: 0.5,
  color: 'white',
  fillOpacity: 0.9,
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
  const [isColorBlind, setIsColorBlind] = useState(true);
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
        scale={isColorBlind ? ['#e5deff', '#a69bed', '#0a3fcf'] : ['red', 'orange', 'green']}
        steps={10}
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
      <div className="colorGradient-container" data-tip="Cliquer pour changer la palette de couleur" data-for="tooltipDiv">
        <span className="color-text--1">Mauvais</span>
        {/* eslint-disable */}
        <div
          id="colorBlindBtn"
          name="colorBlindBtn"
          className="colorGradient"
          style={{
            background: isColorBlind ? 'linear-gradient(to right, #e5deff, #a69bed, #0a3fcf)' : 'linear-gradient(to right, red, orange, green)',
          }}

          onClick={(e) => {
            setIsColorBlind(value => !value)
          }}
        />
        { /* eslint-enable */}

        <span className="color-text--2">Excellent</span>
      </div>
      <ReactTooltip id="tooltipDiv" effect="solid" />
      <button
        type="button"
        className="iconEye-container"
        onClick={() => {
          setIsColorBlind((value) => !value);
        }}
        onKeyDown={() => {

        }}
        data-tip="Changer la palette de couleur"
        data-for="tooltipButton"
      >
        <FontAwesomeIcon icon={faEye} size="lg" className="iconEye" />
      </button>
      <ReactTooltip id="tooltipButton" effect="solid" />
    </Map>
  );
}

export default MapContainer;
