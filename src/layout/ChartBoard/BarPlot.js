import React from 'react';

import { Chart, HorizontalBar } from 'react-chartjs-2';

const { color } = Chart.helpers;
const colors = ['#FFFF00', '#1CE6FF', '#FF34FF', '#FF4A46', '#008941', '#006FA6', '#A30059', '#FFDBE5'];

export default function BarPlot(props) {
  const {
    selectedCountries,
    indicators,
    currentIndicatorId
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

  const { id, desc } = indicators[currentIndicatorId];

  const filteredCountries = selectedCountries.filter(
    (country) => country[id] !== undefined && country[id] !== null
  );

  const compareDesc = (country1, country2) => country1[id] < country2[id];
  const compareAsc = (country1, country2) => country1[id] > country2[id];

  const sortedCountries = filteredCountries.sort((country1, country2) => {
    if (desc) return compareDesc(country1, country2);
    return compareAsc(country1, country2);
  });

  const top50 = sortedCountries.slice(0, 49);

  datasets[currentIndicatorId].data = top50.map((country) => country[id]);

  const barChartData = {
    labels: top50.map((country) => country.name),
    datasets: [datasets[currentIndicatorId]]
  };

  let title = 'Comparatif des indicateurs';

  if (sortedCountries.length > 50) {
    title += ' (50 meilleurs affichés)';
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
            position: 'top',
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
