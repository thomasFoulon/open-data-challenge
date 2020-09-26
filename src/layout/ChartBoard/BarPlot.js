import React, { useState } from 'react';

import { Chart, HorizontalBar } from 'react-chartjs-2';

export default function BarPlot(props) {
  const { countries } = props;
  const { color } = Chart.helpers;

  const datasets = [{
    label: 'PIB/hab',
    property: 'gdp',
    backgroundColor: color('red').alpha(0.5).rgbString(),
    borderColor: 'red',
    borderWidth: 1
  }, {
    label: 'Qualité des transports',
    property: 'transport',
    backgroundColor: color('blue').alpha(0.5).rgbString(),
    borderColor: 'blue',
    borderWidth: 1
  }];

  const [currentDataset, setCurrentDataset] = useState(0);

  if (countries.length === 0) {
    return (
      <p style={{ flex: 1, textAlign: 'center' }}>Sélectionnez un pays.</p>
    );
  }

  const sortedCountries = countries.sort(
    (country1, country2) => country1[datasets[currentDataset].property]
      < country2[datasets[currentDataset].property]
  );

  datasets[currentDataset].data = sortedCountries.map(
    (country) => country[datasets[currentDataset].property]
  );

  const barChartData = {
    labels: sortedCountries.map((country) => country.name),
    datasets: [datasets[currentDataset]]
  };

  const handleChange = (event) => {
    setCurrentDataset(event.target.value);
  };

  return (
    <div style={{ backgroundColor: 'white', flex: 1, margin: 50 }}>
      <div className="indicatorSelector">
        <select value={currentDataset} onChange={handleChange}>
          {datasets.map(
            (dataset, index) => (<option value={index}>{dataset.label}</option>)
          )}
        </select>
      </div>
      <HorizontalBar
        data={barChartData}
        options={{
          responsive: true,
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
