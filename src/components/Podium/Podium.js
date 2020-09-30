import React from 'react';
import './Podium.css';

function Podium({
  country1, country2, country3, hidden
}) {
  return (
    <div
      className="Podium"
      style={{
        display: hidden ? 'none' : 'block'
      }}
    >
      <h1 className="title">Podium</h1>

      <div className="countries-container">
        <div className="country-first-place">
          #1
          {' '}
          {country1}
        </div>
        <div className="country-second-place">
          #2
          {' '}
          {country2}

        </div>
        <div className="country-third-place">
          #3
          {' '}
          {country3}

        </div>
      </div>

    </div>
  );
}

export default Podium;
