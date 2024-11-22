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
    chart: {
      blue: {
        main: string;
        extradark: string;
        dark: string;
      };
      orange: {
        main: string;
      };
    };
  }

  interface PaletteOptions {
    transaction?: {
      debit?: string;
      credit?: string;
    };
    chart?: {
      blue?: {
        main?: string;
        extradark?: string;
        dark?: string;
      };
      orange?: {
        main?: string;
      };
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
    h4: {
      fontSize: '1.75rem',
      fontWeight: 800,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body2: {
      fontSize: '0.9rem',
    },
    subtitle1: {
      fontSize: '0.8rem',
    },
    subtitle2: {
      fontSize: '0.7rem',
    },
    caption: {
      fontSize: '0.6rem',
    },
  },
  palette: {
    primary: {
      main: '#343C6A', // Your primary color
      light: '#718EBF',
      dark: '#0056b3',
    },
    secondary: {
      main: '#edf1f9', // Your secondary color
    },
    background: {
      default: '#f5f7fb', // Your default background color
      paper: '#ffffff', // Background color for paper-like components
    },
    transaction: {
      debit: '#FF4B4A',
      credit: '#41D4A8',
    },
    chart: {
      blue: {
        main: '#396aff',
        dark: '#343C6A',
        extradark: '#232323',
      },
      orange: {
        main: '#FC7900',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
