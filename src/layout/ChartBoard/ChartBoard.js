import React, { Component } from 'react';

import './ChartBoard.css';
import CountriesSelection from './CountriesSelection';

class ChartBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountries: new Set()
    };
    this.countries = [
      { id: 'a', name: 'France' },
      { id: 'b', name: 'Etats-Unis' },
      { id: 'c', name: 'Maroc' },
      { id: 'd', name: 'Argentine' },
      { id: 'e', name: 'Portugal' },
      { id: 'f', name: 'Chili' },
      { id: 'g', name: 'Chine' },
      { id: 'h', name: 'Japon' }
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
    const countries = this.countries.filter((country) => selectedCountries.has(country.id));
    return (
      <div className="ChartBoard">
        <CountriesSelection
          className="countriesSelection"
          countries={this.countries}
          selectedCountries={selectedCountries}
          onChange={(toogledCountry) => this.toogleCountry(toogledCountry)}
        />
        <div className="temporarySelectedCountries">
          <h3>Selected countries</h3>
          {countries.map((country) => (<p key={country.id}>{country.name}</p>))}
        </div>
      </div>
    );
  }
}

export default ChartBoard;
