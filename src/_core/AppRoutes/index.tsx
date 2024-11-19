import { dashboardRoutes } from './DashboardRoutes';

import { RouteStructure } from '_interfaces';

const AppRouteStructure: RouteStructure = {
  fallbackPath: '/dashboard',
  routes: dashboardRoutes,
};

export { AppRouteStructure };
