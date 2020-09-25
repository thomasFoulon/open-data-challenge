import React, { useState } from 'react';

import { Chart, Bar } from 'react-chartjs-2';

export default function BarPlot(props) {
  const { countries } = props;
  const { color } = Chart.helpers;

  const datasets = [{
    label: 'PIB/hab',
    backgroundColor: color('red').alpha(0.5).rgbString(),
    borderColor: 'red',
    borderWidth: 1,
    data: countries.map((country) => country.gdp)
  }, {
    label: 'Qualité des transports',
    backgroundColor: color('blue').alpha(0.5).rgbString(),
    borderColor: 'blue',
    borderWidth: 1,
    data: countries.map((country) => country.transport)
  }];

  const [currentDataset, setCurrentDataset] = useState(0);

  if (countries.length === 0) {
    return (
      <p style={{ flex: 1, textAlign: 'center' }}>Sélectionnez un pays.</p>
    );
  }

  const barChartData = {
    labels: countries.map((country) => country.name),
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
      <Bar
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
            yAxes: [{
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
