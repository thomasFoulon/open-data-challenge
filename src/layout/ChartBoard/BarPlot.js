import React from 'react';

import { HorizontalBar } from 'react-chartjs-2';

export default function BarPlot(props) {
  const {
    countries,
    datasets,
    datasetId
  } = props;

  if (countries.length === 0) {
    return (
      <p className="chart">Sélectionnez un pays.</p>
    );
  }

  const sortedCountries = countries.sort(
    (country1, country2) => country1[datasets[datasetId].property]
      < country2[datasets[datasetId].property]
  );

  datasets[datasetId].data = sortedCountries.map(
    (country) => country[datasets[datasetId].property]
  );

  const barChartData = {
    labels: sortedCountries.map((country) => country.name),
    datasets: [datasets[datasetId]]
  };

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
            text: 'Comparatif des indicateurs'
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
