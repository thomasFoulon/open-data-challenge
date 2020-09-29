import React, { useState } from 'react';
import { map } from 'lodash';
import MapContainer from '../../layout/Map/Map';
import OrderableList from '../../layout/OrderableList/OrderableList';
import ChartBoard from '../../layout/ChartBoard/ChartBoard';

import './Main.css';

const indicators = [
  { id: 'gdp', content: 'PIB par habitant', detail: 'En dollars', desc: true },
  { id: 'homicide', content: 'Taux de criminalité', detail: 'Nombre d\'homicides volontaires pour 100.000 personnes', desc: false },
  { id: 'transportQuality', content: 'Qualité du transport', detail: 'Qualité des infrastructures de transport et de logistique sur une échelle de 1 à 5', desc: true },
  { id: 'literacy', content: 'Qualité de l’éducation', detail: 'Taux d\'alphabétisation en % de la population agée de plus de 15 ans', desc: true },
  { id: 'unemployment', content: 'Taux de chômage', detail: 'En % de la force de travail totale', desc: false },
  { id: 'health', content: 'Qualité du service de santé', detail: 'Dépenses pour la santé par habitant en dollars', desc: true },
  { id: 'pollution', content: 'Pollution', detail: 'Emissions de CO2 en tonnes par habitant', desc: false },
];

function getScore(country, currentItems) {
  let score = 0;
  currentItems.forEach((indicator, index) => {
    if (country[indicator.id] !== undefined && country[indicator.id] !== null) {
      score += (index + 1) * (country[indicator.id] / 100);
    }
  });
  return score;
}

function getAllCountriesScores(processedData, items) {
  const scores = map(processedData, (country) => ({
    id: country.id,
    name: country.name,
    score: getScore(country, items),
  }));
  return scores;
}

function Main(props) {
  const { processedData } = props;
  const [scores, setScore] = useState(getAllCountriesScores(processedData, indicators));

  return (
    <div className="Main">
      <MapContainer scores={scores} />
      <OrderableList
        processedData={processedData}
        items={indicators}
        onChange={(newItems) => {
          setScore(getAllCountriesScores(processedData, newItems));
        }}
      />
      <ChartBoard processedData={processedData} indicators={indicators} />
    </div>
  );
}

export default Main;
