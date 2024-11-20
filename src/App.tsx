import AppLayout from '_core/AppLayout';
import { AppRoutes } from '_lib';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexGrow: 1,
      }}
    >
      <BrowserRouter>
        <AppRoutes>
          <ThemeProvider theme={theme}>
            <AppLayout></AppLayout>
          </ThemeProvider>
        </AppRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
