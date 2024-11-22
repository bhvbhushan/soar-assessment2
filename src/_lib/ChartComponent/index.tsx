import { Box, useTheme } from '@mui/material';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { color } from '_constants';
import React from 'react';
import { transformChartData } from '_helpers';
import { nestedData } from '_interfaces';
import { ChartData } from 'chart.js';

interface chartPropsInterface {
  type: string;
  data: nestedData;
}

const ChartComponent: React.FC<chartPropsInterface> = ({ type, data }) => {
  const chartData = transformChartData(data);
  const theme = useTheme();
  // This could be generalized further by writing a helper function to generate this
  const colorPalette: color[] = [
    ...Object.values(theme.palette.chart.blue),
    ...Object.values(theme.palette.chart.orange),
  ];
  const getChart = (type: string) => {
    switch (type) {
      case 'bar':
        return (
          <BarChart
            data={chartData as ChartData<'bar'>}
            colorPalette={colorPalette}
          />
        );
      case 'pie':
        return (
          <PieChart
            colorPalette={colorPalette}
            data={chartData as ChartData<'pie'>}
          />
        );
      case 'line':
        return (
          <LineChart
            colorPalette={colorPalette}
            data={chartData as ChartData<'line'>}
          />
        );
      default:
        return (
          <BarChart
            data={chartData as ChartData<'bar'>}
            colorPalette={colorPalette}
          />
        );
    }
  };

  console.log({ chart: getChart(type) });

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
