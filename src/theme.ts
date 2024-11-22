import { createTheme, responsiveFontSizes } from '@mui/material/styles';

/**
 * Extra palette colors for Transactions
 */
declare module '@mui/material/styles' {
  interface Palette {
    transaction: {
      debit: string;
      credit: string;
    };
  }
  interface PaletteOptions {
    transaction?: {
      debit?: string;
      credit?: string;
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    debit: true;
    credit: true;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1100,
      lg: 1400,
      xl: 1800,
    },
  },
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
      main: '#FF4B4A', // Your secondary color
    },
    background: {
      default: '#f8f9fa', // Your default background color
      paper: '#ffffff', // Background color for paper-like components
    },
    transaction: {
      debit: '#FF4B4A',
      credit: '#41D4A8',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
