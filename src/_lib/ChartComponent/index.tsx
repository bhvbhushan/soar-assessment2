import { Box } from '@mui/material';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { barData } from '_constants';
import React from 'react';

const ChartComponent: React.FC<{ type: string }> = ({ type }) => {
  const data = barData;
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
