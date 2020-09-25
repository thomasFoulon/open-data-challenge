import React, { useState } from 'react';

function CountriesSelection(props) {
  const { countries, selectedCountryIds, onChange } = props;

  const [searchValue, setSearchValue] = useState('');
  const [displayedCountries, setDisplayedCountries] = useState(countries);

  const searchCountries = (event) => {
    const newSearchValue = event.target.value.trim().toLowerCase();
    const newDisplayedCountries = countries.filter(
      (item) => item.name.trim().toLowerCase().substr(0, newSearchValue.length)
        === newSearchValue
    );
    setSearchValue(newSearchValue);
    setDisplayedCountries(newDisplayedCountries);
  };

  const toggleCountry = (countryId) => {
    if (selectedCountryIds.has(countryId)) {
      selectedCountryIds.delete(countryId);
    } else {
      selectedCountryIds.add(countryId);
    }
    onChange(Array.from(selectedCountryIds));
  };

  return (
    <div className="contriesSelection">
      <input type="text" value={searchValue} onChange={searchCountries} />
      <ul>
        {displayedCountries.map((country) => (
          <li key={country.id}>
            <input
              type="checkbox"
              checked={selectedCountryIds.has(country.id)}
              onChange={() => toggleCountry(country.id)}
            />
            {country.name}
          </li>
        ))}
      </ul>
      <button onClick={() => onChange(countries.map((country) => country.id))}>
        Tout sélectionner
      </button>
      <button onClick={() => onChange([])}>Tout déselectionner</button>
    </div>
  );
}

export default CountriesSelection;
