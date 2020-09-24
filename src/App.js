import React from 'react';

import Header from './layout/Header/Header';
import MapContainer from './layout/Map/Map';
import OrderableList from './layout/OrderableList/OrderableList';
import About from './layout/About/About';
import Footer from './layout/Footer/Footer';
import ChartBoard from './layout/ChartBoard/ChartBoard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MapContainer />
      <OrderableList />
      <ChartBoard />
      <About />
      <Footer />
    </div>
  );
}

export default App;
