import { RouteObject } from '_interfaces';
import { Navigate } from 'react-router-dom';
import { DashboardPage, SettingPage } from './PageElements';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/setting',
    element: <SettingPage />,
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/index.html',
    element: <Navigate to="/dashboard" />,
  },
];
