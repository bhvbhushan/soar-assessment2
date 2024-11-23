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
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'; // Import the plugin

import {
  generateColorsForLabels,
  getPiePcntData,
  getRandomNum,
} from '_helpers';
import { color } from '_constants';
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
  data: ChartData<'pie'>;
}

const PieChart: React.FC<chartProps> = ({ colorPalette, data }) => {
  const labels = data['labels'] ? data['labels'] : undefined;
  if (!labels) return;

  const offset = labels?.map(() => getRandomNum(25, 50));

  const updatedData = {
    ...data,
    datasets: data.datasets.map((dataset) => {
      return {
        ...dataset,
        // data: getPiePcntData(dataset.data),
        backgroundColor: generateColorsForLabels(
          labels as string[],
          colorPalette
        ),
        hoverOffset: 4,
        offset,
      };
    }),
  };

  const options: ChartOptions<'pie'> = {
    plugins: {
      datalabels: {
        // This plugin's configuration
        color: '#fff', // Text color
        formatter: (_value: string, context: Context) => {
          console.log({ context: context.dataset.data });
          const dataVal = getPiePcntData([...context.dataset.data] as number[]);
          const label = context.chart.data.labels
            ? context.chart.data.labels[context.dataIndex]
            : null;
          return `${dataVal[context.dataIndex]}\n${label}`;
        },
        anchor: 'center',
        textAlign: 'right',
        font: {
          weight: 'bold',
          size: 12,
        },
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 10,
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        // borderAlign: 'inner',
      },
    },
    datasets: {
      pie: {
        // spacing: 5,
      },
    },
  };
  return <Pie data={updatedData} options={options} />;
};

export default PieChart;
