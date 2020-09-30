import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Choropleth from 'react-leaflet-choropleth';

import 'leaflet/dist/leaflet.css';
import './Map.css';

import { faEye, faWindowRestore } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Podium from '../../components/Podium/Podium';

import topology from '../../assets/json/countries-50m.json';

const style = {
  weight: 0.5,
  color: 'white',
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

function getTop3(scores) {
  const scoresSorted = scores.sort(compare);
  return scoresSorted.slice(0, 3);
}
function compare(score1, score2) {
  return score1.score < score2.score;
}
function MapContainer({ scores, onClickOnCountry }) {
  const [isColorBlind, setIsColorBlind] = useState(true);
  const [isPodiumHidden, setIsPodiumHidden] = useState(true);
  let top3Countries = getTop3(scores);
  useEffect(() => {
    top3Countries = getTop3(scores);
  }, [top3Countries]);

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
        scale={isColorBlind ? ['#F3B400', '#BB8B00', '#837171', '#0079CE', '#3994FC'] : ['red', 'orange', 'green']}
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
      <div className="colorGradient-container">
        <span className="color-text--1">Mauvais</span>
        {/* eslint-disable */}
        <div
          id="colorBlindBtn"
          name="colorBlindBtn"
          className="colorGradient"
          style={{
            background: isColorBlind ? 'linear-gradient(to right, #827170, #F2B400,#0379CE)' : 'linear-gradient(to right, red, orange, green)',
          }}

          onClick={(e) => {
            setIsColorBlind(value => !value)
          }}
        />
        { /* eslint-enable */}

        <span className="color-text--2">Excellent</span>
      </div>
      <button
        type="button"
        className="iconEye-container"
        onClick={() => {
          setIsColorBlind((value) => !value);
        }}
        onKeyDown={() => {

        }}
      >
        <FontAwesomeIcon icon={faEye} size="lg" className="iconEye" />

      </button>

      <button
        type="button"
        className="iconWindow-container"
        onClick={() => {
          setIsPodiumHidden((value) => !value);
        }}
        onKeyDown={() => {

        }}
      >
        <FontAwesomeIcon icon={faWindowRestore} size="lg" className="iconWindow" />

      </button>
      <Podium
        country1={top3Countries[0].name}
        country2={top3Countries[1].name}
        country3={top3Countries[2].name}
        hidden={isPodiumHidden}
      />
    </Map>
  );
}

export default MapContainer;
