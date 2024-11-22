import { useEffect, useRef } from 'react';
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
  Point,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin

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

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales ($)',
      data: [3000, 2000, 4000, 1000, 6000, 2000],
      borderColor: '#1716f1',
      fill: true,
      tension: 0.3,
    },
  ],
};

const LineChart = () => {
  const chartRef = useRef<ChartJS<'line'>>(null);
  const createGradient = (chart: ChartJS<'line'>) => {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;

    if (!chartArea) {
      // Chart hasn't been drawn yet, exit early
      return;
    }

    // Create gradient
    const gradient = ctx.createLinearGradient(
      chartArea.left,
      0,
      chartArea.right,
      0
    );
    gradient.addColorStop(0, '#ccd8ff');
    gradient.addColorStop(1, '#ffffff');

    chart.data.datasets[0].backgroundColor = gradient;
  };

  const options: ChartOptions<'line'> = {
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
    onResize: (chart: ChartJS<'line', (number | Point | null)[], unknown>) => {
      createGradient(chart);
      chart.update('none'); // Update without animation for performance
    },
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    createGradient(chart);
    chart.update();
  }, []);
  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineChart;
