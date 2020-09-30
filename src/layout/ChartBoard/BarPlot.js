import React from 'react';

import { Chart, HorizontalBar } from 'react-chartjs-2';

const { color } = Chart.helpers;
const colors = ['#FF4A46', '#ea8b66', '#008941', '#006FA6', '#A30059', '#008941', '#a079bf', '#9f94f0', '#be4700'];

export default function BarPlot(props) {
  const {
    selectedCountries,
    indicators,
    scores,
    currentIndicatorIndex,
    displayWorstCountries
  } = props;

  const datasets = indicators.map((indicator, index) => {
    const datasetColor = colors[index % colors.length];
    return {
      label: indicator.content,
      backgroundColor: color(datasetColor).alpha(0.5).rgbString(),
      borderColor: datasetColor,
      borderWidth: 1
    };
  });

  if (selectedCountries.length === 0) {
    return (
      <p className="chart">Sélectionnez un pays.</p>
    );
  }

  const { id: indicatorId, desc } = indicators[currentIndicatorIndex];

  const descOrder = displayWorstCountries ? !desc : desc;

  const getCountryIndicator = (country) => {
    if (indicatorId === 'score') {
      return scores.find((score) => score.id === country.id).score;
    }
    return country[indicatorId];
  };

  const filteredCountries = selectedCountries.filter(
    (country) => typeof getCountryIndicator(country) === 'number'
  );

  const compareDesc = (country1, country2) => getCountryIndicator(country1)
    < getCountryIndicator(country2);

  const compareAsc = (country1, country2) => getCountryIndicator(country1)
    > getCountryIndicator(country2);

  const sortedCountries = filteredCountries.sort((country1, country2) => {
    if (descOrder) return compareDesc(country1, country2);
    return compareAsc(country1, country2);
  });

  const top50 = sortedCountries.slice(0, 49);

  datasets[currentIndicatorIndex].data = top50.map(
    (country) => getCountryIndicator(country).toFixed(2)
  );

  const barChartData = {
    labels: top50.map((country) => country.name),
    datasets: [datasets[currentIndicatorIndex]]
  };

  let title = 'Comparatif des indicateurs';

  if (sortedCountries.length > 50) {
    if (displayWorstCountries) {
      title += ' (50 moins bons affichés)';
    } else {
      title += ' (50 meilleurs affichés)';
    }
  }

  if (filteredCountries.length < selectedCountries.length) {
    const diff = selectedCountries.length - filteredCountries.length;
    title += ` (${diff} sans données)`;
  }

  return (
    <div className="chart">
      <HorizontalBar
        data={barChartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: title
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
      />
    </div>
  );
}
