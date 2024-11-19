import React from 'react';
import { RouteObject } from '_interfaces';

const DashboardPage = React.lazy(() => import('_pages/DashboardPage'));

const SettingPage = React.lazy(() => import('_pages/SettingPage'));

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/setting',
    element: <SettingPage />,
  },
];
