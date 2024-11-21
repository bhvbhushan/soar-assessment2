// src/components/MyChart.tsx
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
import { Bar, Line, Pie, PolarArea, Radar, Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/material';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

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
  Filler
);

const ChartComponent = ({ type }) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [3000, 2000, 4000, 5000, 3000, 6000],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Revenue ($)',
        data: [3000, 2000, 4000, 5000, 3000, 6000],
        backgroundColor: 'rgba(75, 122, 102, 0.5)',
      },
    ],
  };
  const getChart = (type: string) => {
    switch (type) {
      case 'bar':
        return <BarChart data={data} />;
      case 'pie':
        return <PieChart />;
      case 'line':
        return <LineChart />;
      default:
        return <BarChart data={data} />;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: '0px',
        pb: '1rem',
        minHeight: '300px',
        overflowX: 'auto',
        width: '100%',
        height: '100%',
      }}
    >
      {getChart(type)}
    </Box>
  );
};

export default React.memo(ChartComponent);
