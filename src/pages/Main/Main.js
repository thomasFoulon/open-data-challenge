import React from 'react';
import MapContainer from '../../layout/Map/Map';
import OrderableList from '../../layout/OrderableList/OrderableList';
import ChartBoard from '../../layout/ChartBoard/ChartBoard';

import './Main.css';

function Main() {
  return (
    <div className="Main">
      <MapContainer />
      <OrderableList
        items={[
          { id: 'a', content: 'PIB' },
          { id: 'b', content: 'Qualité des transports' },
          { id: 'c', content: 'Qualité du système de santé' }
        ]}
        onChange={() => {}}
      />
      <ChartBoard />
    </div>
  );
}

export default Main;
