import React, { useState } from 'react';
import { map } from 'lodash';
import MapContainer from '../../layout/Map/Map';
import OrderableList from '../../layout/OrderableList/OrderableList';
import ChartBoard from '../../layout/ChartBoard/ChartBoard';

import './Main.css';

function getScore(processedData) {
  const scores = map(processedData, (country) => ({
    id: country.id,
    name: country.name,
    score: country.gdp + country.homicide + country.literacy + country.health + country.pollution + country.unemployment + country.transportQuality,
  }));
  return scores;
}

function Main(props) {
  const { processedData } = props;
  const [scores, setScores] = useState(getScore(processedData));

  return (
    <div className="Main">
      <MapContainer scores={scores} />
      <OrderableList
        processedData={processedData}
        items={[
          { id: '1', content: 'PIB' },
          { id: '2', content: 'Taux de criminalité' },
          { id: '3', content: 'Qualité du transport' },
          { id: '4', content: 'Qualité de l’éducation' },
          { id: '5', content: 'Taux de chômage' },
          { id: '6', content: 'Qualité du service de santé' },
          { id: '7', content: 'Pollution' },
        ]}
        onChange={() => {}}
      />
      <ChartBoard processedData={processedData} />
    </div>
  );
}

export default Main;
