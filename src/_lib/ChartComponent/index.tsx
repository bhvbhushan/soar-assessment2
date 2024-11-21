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

const ChartComponent = () => {
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

  const options = {
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
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
  };
  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: '0px',
        pb: '1rem',
        minHeight: '300px',
        overflowX: 'auto',
        width: '99%',
        height: '99%',
      }}
    >
      <Bar data={data} options={options} />
    </Box>
  );
};

export default ChartComponent;
