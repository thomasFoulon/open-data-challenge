import React, { useState } from 'react';

import './ChartBoard.css';
import CountriesSelection from './CountriesSelection';
import BarPlot from './BarPlot';

function ChartBoard() {
  const [selectedCountryIds, setSelectedCountryIds] = useState(new Set());
  const countries = [
    {
      id: 'a', name: 'France', gdp: 351, transport: 34
    },
    {
      id: 'b', name: 'Etats-Unis', gdp: 1542, transport: 56
    },
    {
      id: 'c', name: 'Maroc', gdp: 657, transport: 20
    },
    {
      id: 'd', name: 'Argentine', gdp: 210, transport: 86
    },
    {
      id: 'e', name: 'Portugal', gdp: 124, transport: 200
    },
    {
      id: 'f', name: 'Chili', gdp: 40, transport: 25
    },
    {
      id: 'g', name: 'Chine', gdp: 1309, transport: 78
    },
    {
      id: 'h', name: 'Japon', gdp: 32, transport: 3
    }
  ];

  const selectedCountries = countries.filter((country) => selectedCountryIds.has(country.id));
  return (
    <div id="ChartBoard" className="ChartBoard">
      <CountriesSelection
        className="countriesSelection"
        countries={countries}
        selectedCountryIds={selectedCountryIds}
        onChange={(selectedIds) => setSelectedCountryIds(new Set(selectedIds))}
      />
      <BarPlot countries={selectedCountries} />
    </div>
  );
}

export default ChartBoard;
