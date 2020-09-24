import React, { Component } from 'react';

class CountriesSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      displayedCountries: props.countries
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { countries } = this.props;
    const newSearchValue = event.target.value.trim().toLowerCase();
    const newDisplayedCountries = countries.filter(
      (item) => item.name.trim().toLowerCase().substr(0, newSearchValue.length)
        === newSearchValue
    );
    this.setState({
      searchValue: newSearchValue,
      displayedCountries: newDisplayedCountries
    });
  }

  render() {
    const { searchValue, displayedCountries } = this.state;
    const { selectedCountries, onChange } = this.props;
    return (
      <div className="contriesSelection">
        <input type="text" value={searchValue} onChange={this.handleChange} />
        <ul>
          {displayedCountries.map((country) => (
            <li key={country.id}>
              <input type="checkbox" defaultChecked={selectedCountries.has(country.id)} onClick={() => onChange(country)} />
              {country.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountriesSelection;
