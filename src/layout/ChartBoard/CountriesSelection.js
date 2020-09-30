import React, { useState, useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import SelectableCountry from '../../components/SelectableCountry/SelectableCountry';

import './CountriesSelection.css';

function CountriesSelection(props) {
  const {
    countries,
    selectedCountryIds,
    onChange
  } = props;

  const [matchingCountries, setMatchingCountries] = useState(countries);
  const [displayed, setDisplayed] = useState(false);

  const countriesSelectionRef = useRef(null);

  const searchCountries = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();
    const newMatchingCountries = countries.filter(
      (item) => item.name.trim().toLowerCase().substr(0, searchValue.length)
        === searchValue
    );
    setMatchingCountries(newMatchingCountries);
    setDisplayed(newMatchingCountries.length > 0);
  };

  const toggleCountry = (countryId) => {
    if (selectedCountryIds.has(countryId)) {
      selectedCountryIds.delete(countryId);
    } else {
      selectedCountryIds.add(countryId);
    }
    onChange(Array.from(selectedCountryIds));
  };

  const undisplay = () => {
    setDisplayed(false);
  };

  useEffect(() => {
    const listener = (event) => {
      if (countriesSelectionRef.current && !countriesSelectionRef.current.contains(event.target)) {
        undisplay();
      }
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [countriesSelectionRef, undisplay]);

  let displayedCountriesClassName = 'displayedCountries';

  if (!displayed) {
    displayedCountriesClassName += ' notDisplayed';
  }

  return (
    <div className="countriesSelection" ref={countriesSelectionRef}>
      <div className="select">
        <input type="text" onChange={searchCountries} placeholder="Rechercher un pays..." />
        <p>
          (
          {selectedCountryIds.size}
          &nbsp;sélectionné
          {selectedCountryIds.size > 1 ? 's' : ''}
          )
        </p>
        <div className="verticalSeparator" />
        <button type="button" className="bottomArrowButton" onClick={() => setDisplayed(!displayed)}>
          <FontAwesomeIcon icon={displayed ? faCaretUp : faCaretDown} size="lg" />
        </button>
      </div>
      <div className="selectionButtons">
        <button
          className="blueButton"
          type="button"
          title="Tout sélectionner"
          onClick={() => onChange(countries.map((country) => country.id))}
        >
          <FontAwesomeIcon icon={faCheck} size="lg" />
          <p>Tout sélectionner</p>
        </button>
        <button
          className="redButton"
          type="button"
          title="Tout désélectionner"
          onClick={() => onChange([])}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
          <p>Tout désélectionner</p>
        </button>
      </div>
      <div className={displayedCountriesClassName}>
        {matchingCountries.map((country) => (
          <SelectableCountry
            key={country.id}
            country={country}
            selected={selectedCountryIds.has(country.id)}
            onChange={() => toggleCountry(country.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CountriesSelection;
