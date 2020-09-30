import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortNumericDown, faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons';

import Switch from 'react-switch';

import './ChartBoard.css';
import CountriesSelection from './CountriesSelection';
import BarPlot from './BarPlot';

function ChartBoard({
  processedData, indicators, selectedCountryIds, setSelectedCountryIds
}) {
  const [currentIndicatorId, setCurrentIndicatorId] = useState(0);
  const [displayWorstCountries, setDisplayWorstCountries] = useState(false);

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
        <div className="bestWorstSelector">
          <FontAwesomeIcon
            icon={faSortNumericDown}
            size="lg"
          />
          <Switch
            className="bestWorstSwitch"
            onChange={(checked) => setDisplayWorstCountries(checked)}
            checked={displayWorstCountries}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#ff0000"
          />
          <FontAwesomeIcon
            icon={faSortNumericDownAlt}
            size="lg"
          />
        </div>
      </div>
      <BarPlot
        selectedCountries={selectedCountries}
        indicators={indicators}
        currentIndicatorId={currentIndicatorId}
        displayWorstCountries={displayWorstCountries}
      />
    </div>
  );
}

export default ChartBoard;
