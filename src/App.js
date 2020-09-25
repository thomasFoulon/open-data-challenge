import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './layout/Header/Header';

import Report from './pages/Report/Report';
import Main from './pages/Main/Main';
import Footer from './layout/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
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
