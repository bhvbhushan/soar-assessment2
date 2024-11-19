import AppLayout from '_core/AppLayout';
import { AppRoutes } from '_lib';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes>
          <AppLayout></AppLayout>
        </AppRoutes>
      </BrowserRouter>
    </>
  );
}

export default App;
