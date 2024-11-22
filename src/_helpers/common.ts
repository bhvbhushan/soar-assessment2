import { color, chartDataObjectType } from '_constants';
import { nestedData } from '_interfaces';
import { ChartData } from 'chart.js';

// Function to generate a random integer between min and max (inclusive)
export const getRandomNum = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateColorsForLabels = (
  labels: string[] | undefined,
  colors: color[]
) => {
  const baseColors = [...colors]; // Create a copy to avoid modifying the original array
  const numLabels = labels ? labels.length : 0;
  const numColors = baseColors.length;

  if (numLabels <= numColors) {
    return baseColors.slice(0, numLabels); // Return the first 'numLabels' colors
  }

  // If more labels than colors, generate random colors for the extra labels
  const extraColorsNeeded = numLabels - numColors;
  const extraColors = [];
  for (let i = 0; i < extraColorsNeeded; i++) {
    extraColors.push(getRandomColor());
  }

  return [...baseColors, ...extraColors];
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const isObject = (value: unknown) => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export const transformChartData = (data: nestedData): ChartData | undefined => {
  const chartDataObj: chartDataObjectType = {};

  const labels = Object.keys(data);
  if (labels.length === 0) return;
  // chartDataObj['labels'] = labels;
  const fstData = data[labels[0]];
  if (isObject(fstData)) {
    Object.keys(fstData).forEach((key) => (chartDataObj[key] = []));
  } else {
    chartDataObj['_temp'] = [];
  }

  labels.forEach((lbl) => {
    const tempData = data[lbl];
    if (isObject(tempData) && typeof tempData === 'object') {
      Object.keys(tempData).forEach((key) => {
        chartDataObj[key].push(tempData[key]);
      });
    } else {
      chartDataObj['_temp'].push(tempData as string | number);
    }
  });

  //Transforming to ChartData Type
  const dataLabels = Object.keys(chartDataObj);
  const datasets = dataLabels.map((lbl) => ({
    label: lbl === '_temp' ? null : lbl,
    data: chartDataObj[lbl],
  }));
  const dataObj = {
    labels,
    datasets,
  };
  return dataObj as ChartData;
};

export const getPiePcntData = (data: number[]) => {
  const total = data.reduce((a, b) => a + b, 0);
  const pieData = data.map((val) => `${Math.floor((val / total) * 100)}%`);
  return pieData;
};
