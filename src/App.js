import React from 'react';

import Header from './layout/Header/Header';
import MapContainer from './layout/Map/Map';
import OrderableList from './layout/OrderableList/OrderableList';
import Report from './layout/Report/Report';
import Footer from './layout/Footer/Footer';
import ChartBoard from './layout/ChartBoard/ChartBoard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
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
      <Report />
      <Footer />
    </div>
  );
}

export default App;
