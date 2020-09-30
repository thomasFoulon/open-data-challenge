import React, { useState } from 'react';
import {
  map, minBy, maxBy, find, sum
} from 'lodash';
import MapContainer from '../../layout/Map/Map';
import OrderableList from '../../layout/OrderableList/OrderableList';
import ChartBoard from '../../layout/ChartBoard/ChartBoard';

import './Main.css';

const indicators = [
  { id: 'gdp', content: 'PIB', desc: true },
  { id: 'homicide', content: 'Taux de criminalité', desc: false },
  { id: 'transportQuality', content: 'Qualité du transport', desc: true },
  { id: 'literacy', content: 'Qualité de l’éducation', desc: true },
  { id: 'unemployment', content: 'Taux de chômage', desc: false },
  { id: 'health', content: 'Qualité du service de santé', desc: true },
  { id: 'pollution', content: 'Pollution', desc: false },
];

function getScore(country, currentItems, indicatorsMinMax) {
  let score = 0;
  currentItems.forEach((indicator, index) => {
    if (country[indicator.id] !== undefined && country[indicator.id] !== null) {
      const minMax = find(indicatorsMinMax, (element) => (element.id === indicator.id));
      score
      += (7 - index) * ((country[indicator.id] - minMax.min) / (minMax.max - minMax.min));
    }
  });
  score /= 7;
  return score;
}

function getAllCountriesScores(processedData, items, indicatorsMinMax) {
  const scores = map(processedData, (country) => ({
    id: country.id,
    name: country.name,
    score: getScore(country, items, indicatorsMinMax),
  }));
  return scores;
}

function Main(props) {
  const { processedData } = props;

  const indicatorsMinMax = map(indicators, (indicator) => {
    const minValue = minBy(processedData, indicator.id)[indicator.id];
    const maxValue = maxBy(processedData, indicator.id)[indicator.id];
    return {
      id: indicator.id,
      min: indicator.desc ? minValue : maxValue,
      max: indicator.desc ? maxValue : minValue
    };
  });

  const [scores, setScore] = useState(
    getAllCountriesScores(processedData, indicators, indicatorsMinMax)
  );

  return (
    <div className="Main">
      <MapContainer scores={scores} />
      <OrderableList
        processedData={processedData}
        items={indicators}
        onChange={(newItems) => {
          setScore(getAllCountriesScores(processedData, newItems, indicatorsMinMax));
        }}
      />
      <ChartBoard processedData={processedData} />
    </div>
  );
}

export default Main;
