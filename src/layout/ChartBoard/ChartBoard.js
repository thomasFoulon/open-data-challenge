import React, { Component } from 'react';

import './ChartBoard.css';
import CountriesSelection from './CountriesSelection';
import BarPlot from './BarPlot';

class ChartBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountries: new Set()
    };
    this.allCountries = [
      {
        id: 'a', name: 'France', gdp: 351, transport: 34
      },
      {
        id: 'b', name: 'Etats-Unis', gdp: 1542, transport: 56
      },
      {
        id: 'c', name: 'Maroc', gdp: 657, transport: 20
      },
      {
        id: 'd', name: 'Argentine', gdp: 210, transport: 86
      },
      {
        id: 'e', name: 'Portugal', gdp: 124, transport: 200
      },
      {
        id: 'f', name: 'Chili', gdp: 40, transport: 25
      },
      {
        id: 'g', name: 'Chine', gdp: 1309, transport: 78
      },
      {
        id: 'h', name: 'Japon', gdp: 32, transport: 3
      }
    ];
    this.toogleCountry = this.toogleCountry.bind(this);
  }

  toogleCountry(toogledCountry) {
    const { selectedCountries } = this.state;
    if (selectedCountries.has(toogledCountry.id)) {
      selectedCountries.delete(toogledCountry.id);
    } else {
      selectedCountries.add(toogledCountry.id);
    }
    this.setState({
      selectedCountries
    });
  }

  render() {
    const { selectedCountries } = this.state;
    const countries = this.allCountries.filter((country) => selectedCountries.has(country.id));
    return (
      <div id="ChartBoard" className="ChartBoard">
        <CountriesSelection
          className="countriesSelection"
          countries={this.allCountries}
          selectedCountries={selectedCountries}
          onChange={(toogledCountry) => this.toogleCountry(toogledCountry)}
        />
        <BarPlot countries={countries} />
      </div>
    );
  }
}

export default ChartBoard;
