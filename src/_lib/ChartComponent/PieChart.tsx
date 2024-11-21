import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Filler,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'; // Import the plugin

import { getRandomNum } from '_helpers';
// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  ChartDataLabels
);

const PieChart = () => {
  const labels = ['Red', 'Blue', 'Yellow', 'Green'];
  const offsets = labels.map((lbl) => getRandomNum(25, 50));
  console.log({ offsets });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [150, 50, 100, 80],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
        offset: offsets,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        // This plugin's configuration
        color: '#fff', // Text color
        formatter: (value: string, context: Context) => {
          const label = context.chart.data.labels
            ? context.chart.data.labels[context.dataIndex]
            : null;
          return `${value}\n${label}`;
        },
        anchor: 'center',
        textAlign: 'center',
        font: {
          weight: 'bold',
          size: 14,
        },
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 10,
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        // borderAlign: 'inner',
      },
    },
    datasets: {
      pie: {
        // spacing: 5,
      },
    },
  };
  return <Pie data={data} options={options} />;
};

export default PieChart;
