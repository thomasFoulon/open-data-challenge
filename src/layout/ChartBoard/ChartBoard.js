import React, { useState } from 'react';

import './ChartBoard.css';
import CountriesSelection from './CountriesSelection';
import BarPlot from './BarPlot';

function ChartBoard({ processedData, indicators }) {
  const [selectedCountryIds, setSelectedCountryIds] = useState(new Set());
  const [currentIndicatorId, setCurrentIndicatorId] = useState(0);

  const handleChange = (event) => {
    setCurrentIndicatorId(event.target.value);
  };

  const selectedCountries = processedData.filter((country) => selectedCountryIds.has(country.id));
  return (
    <div id="ChartBoard" className="ChartBoard">
      <div className="selection">
        <CountriesSelection
          countries={processedData.map((country) => ({ id: country.id, name: country.name }))}
          selectedCountryIds={selectedCountryIds}
          onChange={(selectedIds) => setSelectedCountryIds(new Set(selectedIds))}
        />
        <div className="indicatorSelector">
          <select value={currentIndicatorId} onChange={handleChange}>
            {indicators.map(
              (indicator, index) => (
                <option key={indicator.id} value={index}>{indicator.content}</option>
              )
            )}
          </select>
        </div>
      </div>
      <BarPlot
        selectedCountries={selectedCountries}
        indicators={indicators}
        currentIndicatorId={currentIndicatorId}
      />
    </div>
  );
}

export default ChartBoard;
