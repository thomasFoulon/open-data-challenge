import React, { useState } from 'react';

import Header from './layout/Header/Header';
import Map from './layout/Map/Map';
import OrderableList from './layout/OrderableList/OrderableList';
import About from './layout/About/About';
import Footer from './layout/Footer/Footer';
import ChartBoard from './layout/ChartBoard/ChartBoard';

import { themes } from './Utils/constants';
import './App.css';

function App() {
  const [theme, setTheme] = useState(themes.LIGHT);

  return (
    <div className={`App ${theme}`}>
      <Header
        onThemeChanged={(themeData) => {
          setTheme(themeData);
        }}
        theme={theme}
      />
      <Map />
      <OrderableList />
      <ChartBoard />
      <About />
      <Footer />
    </div>
  );
}

export default App;
