import { map, find } from 'lodash';

import { csv } from 'd3';

export const fetchCountries = async () => {
  const response = await fetch(
    'http://api.worldbank.org/v2/country/?format=json&per_page=350'
  );
  const countries = await response.json();
  const nameCountries = map(countries[1], ({ name, id }) => [id, name]);

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

export const fetchTransportQualityAllCountries = () => csv('data/transport-quality.csv').then((data) => {
  data.forEach((d) => {
    // eslint-disable-next-line no-param-reassign
    if (d['2018'] !== '') { d['2018'] = +d['2018']; }
  });

  return data;
});

export const fetchInequalityAllCountries = () => csv('./data/inequality.csv').then((data) => {
  data.forEach((d) => {
    // eslint-disable-next-line no-param-reassign
    if (d['2020'] !== '') { d['2020'] = +d['2020']; }
  });

  return data;
});

export const processData = (
  countries,
  gdpAll,
  homicideAll,
  literacyAll,
  healthAll,
  pollutionAll,
  unemploymentAll,
  transportAll,
  inequalityAll
) => {
  const processedData = map(countries, ([id, name]) => ({
    id,
    name,
    gdp: find(gdpAll, { countryiso3code: id })?.value,
    homicide: find(homicideAll, { countryiso3code: id })?.value,
    literacy: find(literacyAll, { countryiso3code: id })?.value,
    health: find(healthAll, { countryiso3code: id })?.value,
    pollution: find(pollutionAll, { countryiso3code: id })?.value,
    unemployment: find(unemploymentAll, { countryiso3code: id })?.value,
    transportQuality: find(transportAll, { country: name })?.['2018'],
    inequality: find(inequalityAll, { country: name })?.['2020'],
  }));

  return processedData;
};
