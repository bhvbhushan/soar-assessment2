import { memo, useEffect, useRef } from 'react';
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
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin
import { color } from '_constants';
import { useTheme } from '@mui/material';

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

interface chartProps {
  colorPalette: color[];
  data: ChartData<'line'>;
}

// This currently supports ONLY 1 datasets at a time, due to restrictive Gradient feature
const LineChart: React.FC<chartProps> = ({ data }) => {
  console.log({ data });
  const theme = useTheme();
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
    gradient.addColorStop(0, theme.palette.chart.blue.main);
    gradient.addColorStop(1, theme.palette.background.paper);

    chart.data.datasets[0].fill = true;
    chart.data.datasets[0].borderColor = theme.palette.chart.blue.main;
    chart.data.datasets[0].backgroundColor = gradient;
  };

  const options: ChartOptions<'line'> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: 30,
    },

    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: 'auto',
      },
      legend: {
        display: false,
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
    console.log({ chart });
  }, []);
  return <Line ref={chartRef} data={data} options={options} />;
};

export default memo(LineChart);
