import AppLayout from '_core/AppLayout';
import { AppRoutes } from '_lib';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { AlertProvider, UserProvider } from '_context';
import { CssBaseline } from '@mui/material';
import '_api/mockAdapter';

function App() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        margin: 0,
        padding: '0',
        display: 'flex',
        // flexGrow: 1,
        // overflow: 'scroll',
      }}
    >
      <BrowserRouter>
        <AppRoutes>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Resets CSS for consistency */}
            <UserProvider>
              <AlertProvider>
                <AppLayout></AppLayout>
              </AlertProvider>
            </UserProvider>
          </ThemeProvider>
        </AppRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
