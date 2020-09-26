import { map, filter } from 'lodash';

import transport from '../assets/json/transport_quality.json';

export const fetchCountries = async () => {
  const response = await fetch(
    'http://api.worldbank.org/v2/country/?format=json&per_page=350'
  );
  const countries = await response.json();
  const nameCountries = map(countries[1], ({ name, id }) => [name, id]);

  return nameCountries;
};

const setIndicator = (ind) => {
  switch (ind) {
    case 'gdp':
      return 'NY.GDP.PCAP.CD';
    case 'homicide':
      return 'VC.IHR.PSRC.P5';
    case 'literacy':
      return 'SE.ADT.LITR.ZS';
    case 'health':
      return 'SH.XPD.CHEX.PC.CD';
    case 'pollution':
      return 'EN.ATM.CO2E.PC';
    case 'unemployment':
      return 'SL.UEM.TOTL.NE.ZS';
    default:
      return '';
  }
};

export const fetchIndicatorAllCountries = async (ind) => {
  const indicator = setIndicator(ind);
  const response = await fetch(
    `http://api.worldbank.org/v2/country/all/indicator/${indicator}?format=json&mrnev=1&per_page=350`
  );
  const data = await response.json();

  return data[1];
};

export const fetchIndicatorByCountry = async (country, ind) => {
  const indicator = setIndicator(ind);
  const response = await fetch(
    `http://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&mrnev=5`
  );
  const data = await response.json();

  return data[1];
};

export const fetchTransportQualityAllCountries = () => transport;

export const fetchTransportQualityByCountry = (countryName) => {
  const transportByCountry = filter(
    transport,
    ({ country }) => country === countryName
  );

  return transportByCountry;
};
