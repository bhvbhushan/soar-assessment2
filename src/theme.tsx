import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Your preferred font family
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.7rem',
    },
    // ... other font size definitions
  },
  palette: {
    primary: {
      main: '#343C6A', // Your primary color
      light: '#718EBF',

      dark: '#0056b3',
    },
    secondary: {
      main: '#6c757d', // Your secondary color
    },
    background: {
      default: '#f8f9fa', // Your default background color
      paper: '#ffffff', // Background color for paper-like components
    },
  },
});

export default theme;
