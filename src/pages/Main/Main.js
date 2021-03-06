import React, { useState } from 'react';
import {
  map, minBy, maxBy, find
} from 'lodash';
import MapContainer from '../../layout/Map/Map';
import OrderableList from '../../layout/OrderableList/OrderableList';
import ChartBoard from '../../layout/ChartBoard/ChartBoard';

import './Main.css';

const indicators = [
  {
    id: 'gdp', content: 'PIB par habitant', detail: 'En dollars', desc: true
  },
  {
    id: 'homicide', content: 'Taux de criminalité', detail: 'Nombre d\'homicides volontaires pour 100.000 personnes', desc: false
  },
  {
    id: 'transportQuality', content: 'Qualité du transport', detail: 'Qualité des infrastructures de transport et de logistique sur une échelle de 1 à 5', desc: true
  },
  {
    id: 'literacy', content: 'Qualité de l’éducation', detail: 'Taux d\'alphabétisation en % de la population agée de plus de 15 ans', desc: true
  },
  {
    id: 'unemployment', content: 'Taux de chômage', detail: 'En % de la force de travail totale', desc: false
  },
  {
    id: 'health', content: 'Qualité du service de santé', detail: 'Dépenses pour la santé par habitant en dollars', desc: true
  },
  {
    id: 'pollution', content: 'Pollution', detail: 'Emissions de CO2 en tonnes par habitant', desc: false
  },
  {
    id: 'inequality', content: 'Inégalité', detail: 'Différences de revenus au sein de la société selon le coefficient de Gini', desc: false
  }
];

const scoreIndicator = {
  id: 'score', content: 'Score calculé', detail: 'Score calculé par rapport à votre classement des indicateurs.', desc: true
};

function getScore(country, currentItems, indicatorsMinMax) {
  let score = 0;
  let sumWeight = 0;
  currentItems.forEach((indicator, index) => {
    sumWeight += (currentItems.length - index);
    if (country[indicator.id] !== undefined && country[indicator.id] !== null) {
      const minMax = find(indicatorsMinMax, (element) => (element.id === indicator.id));
      score
        += (currentItems.length - index)
        * ((country[indicator.id] - minMax.min) / (minMax.max - minMax.min))
        * (indicator.desc ? 1 : -1);
    }
  });
  score /= sumWeight;
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
  const [selectedCountryIds, setSelectedCountryIds] = useState(new Set());
  const addToSelectedCountryIds = (countryId) => {
    if (selectedCountryIds.has(countryId)) {
      selectedCountryIds.delete(countryId);
    } else {
      selectedCountryIds.add(countryId);
    }
    setSelectedCountryIds(new Set(Array.from(selectedCountryIds)));
  };

  const indicatorsMinMax = map(indicators, (indicator) => {
    const minValue = minBy(processedData, indicator.id)[indicator.id];
    const maxValue = maxBy(processedData, indicator.id)[indicator.id];
    return {
      id: indicator.id,
      min: minValue,
      max: maxValue
    };
  });

  const [scores, setScore] = useState(
    getAllCountriesScores(processedData, indicators, indicatorsMinMax)
  );

  return (
    <div className="Main">
      <MapContainer
        scores={scores}
        selectedCountryIds={selectedCountryIds}
        onClickOnCountry={(countryId) => addToSelectedCountryIds(countryId)}
      />
      <OrderableList
        processedData={processedData}
        items={indicators}
        onChange={(newItems) => {
          setScore(getAllCountriesScores(processedData, newItems, indicatorsMinMax));
        }}
      />
      <ChartBoard
        processedData={processedData}
        indicators={[scoreIndicator, ...indicators]}
        scores={scores}
        selectedCountryIds={selectedCountryIds}
        setSelectedCountryIds={setSelectedCountryIds}
      />
    </div>
  );
}

export default Main;
