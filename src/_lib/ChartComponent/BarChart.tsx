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
  ChartData,
  ChartOptions,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import

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

const BarChart: React.FC<{ data: ChartData<'bar'> }> = ({ data }) => {
  const options: ChartOptions<'bar'> = {
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
      datalabels: {
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
