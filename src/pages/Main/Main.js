import React from 'react';
import MapContainer from '../../layout/Map/Map';
import OrderableList from '../../layout/OrderableList/OrderableList';
import ChartBoard from '../../layout/ChartBoard/ChartBoard';

import './Main.css';

function Main(props) {
  const { processedData } = props;

  return (
    <div className="Main">
      <MapContainer />
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
