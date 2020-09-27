import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  fetchCountries,
  fetchIndicatorAllCountries,
  fetchTransportQualityAllCountries,
  processData,
} from './api';

import Header from './layout/Header/Header';
import Report from './pages/Report/Report';
import Main from './pages/Main/Main';
import Footer from './layout/Footer/Footer';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [gdpAll, setGdpAll] = useState([]);
  const [homicideAll, setHomicideAll] = useState([]);
  const [literacyAll, setLiteracyAll] = useState([]);
  const [healthAll, setHealthAll] = useState([]);
  const [pollutionAll, setPollutionAll] = useState([]);
  const [unemploymentAll, setUnemploymentAll] = useState([]);
  const [transportAll, setTransportAll] = useState([]);

  const fetchData = async () => {
    setCountries(await fetchCountries());
    setGdpAll(await fetchIndicatorAllCountries('gdp'));
    setHomicideAll(await fetchIndicatorAllCountries('homicide'));
    setLiteracyAll(await fetchIndicatorAllCountries('literacy'));
    setHealthAll(await fetchIndicatorAllCountries('health'));
    setPollutionAll(await fetchIndicatorAllCountries('pollution'));
    setUnemploymentAll(await fetchIndicatorAllCountries('unemployment'));
    setTransportAll(await fetchTransportQualityAllCountries());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const processedData = processData(
    countries,
    gdpAll,
    homicideAll,
    literacyAll,
    healthAll,
    pollutionAll,
    unemploymentAll,
    transportAll
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main processedData={processedData} />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
