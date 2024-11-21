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
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'; // Import

import { Bar } from 'react-chartjs-2';
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

const BarChart = ({ data }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        bottom: 30,
      },
    },
    datasets: {
      bar: {
        barThickness: 10,
        borderRadius: 5,
        borderSkipped: false,
        categoryPercentage: 1,
        barPercentage: 0.5,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabel: {
        display: 'auto',
      },
      legend: {
        position: 'top' as const,
        align: 'end',
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default BarChart;
