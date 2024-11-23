import { color, chartDataObjectType } from '_constants';
import { nestedDataInterface } from '_interfaces';
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

export const transformChartData = (
  data: nestedDataInterface
): ChartData | undefined => {
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
    label: lbl === '_temp' ? '' : lbl,
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

export const generateCCNum = () => {
  let number = '';

  // Generate the first digit (1-9)
  number += Math.floor(Math.random() * 9) + 1;

  // Generate the middle 10 digits (0-9)
  for (let i = 0; i < 14; i++) {
    number += Math.floor(Math.random() * 10);
  }

  // Generate the last digit (1-9)
  number += Math.floor(Math.random() * 9) + 1;

  return number;
};

export const maskCreditCard = (cardNumber: string) => {
  // Remove any non-digit characters
  const cleanedCardNumber = cardNumber.replace(/\D/g, '');

  // Check if the card number is valid (at least 12 digits)
  if (cleanedCardNumber.length < 12) {
    return 'Invalid card number';
  }

  const first4Digits = cleanedCardNumber.slice(0, 4);
  const last4Digits = cleanedCardNumber.slice(-4);
  const maskedDigits = '*'.repeat(cleanedCardNumber.length - 8); // Adjust masked digit count

  // Add spacing after every 4 digits in the masked digits
  const spacedMaskedDigits = maskedDigits.match(/.{1,4}/g)?.join(' ');

  return `${first4Digits}${spacedMaskedDigits} ${last4Digits}`;
};

export const formatAmount = (amount: number) => {
  return Math.floor(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
