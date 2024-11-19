import { RouteObject, RouteStructure } from '_interfaces';

import { Navigate } from 'react-router-dom';

export const generateRoutes = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  structure: Record<string, any>
): RouteObject[] => {
  const { AppRouteStructure, isAuthenticated } = structure || {};

  const dynamicRoutes: RouteObject[] = [];

  if (AppRouteStructure) {
    dynamicRoutes.push(
      ...routesGenerator(isAuthenticated, AppRouteStructure, 'anonymous')
    );
  }

  // alternative to cater for rogue routes for now
  if (dynamicRoutes.length > 0) {
    dynamicRoutes.push({
      path: '*',
      element: <Navigate to={AppRouteStructure.fallbackPath} replace />,
    });
  }

  console.log({ dynamicRoutes });
  return dynamicRoutes;
};

const routesGenerator = (
  isAuthenticated: boolean = false,
  routeSet: RouteStructure,
  type = 'anonymous'
) => {
  const generatedRoutes: RouteObject[] = [];
  const { fallbackPath } = routeSet;

  const isAnonymous = type === 'anonymous';
  const isAuthorized = type === 'authorized';
  const isUnauthorized = type === 'unauthorized';

  if (routeSet?.routes) {
    const routes = routeSet.routes;
    if (Array.isArray(routes) && routes.length > 0) {
      routes.forEach((route) => {
        if (isAnonymous) {
          generatedRoutes.push(route);
        }
        if (isAuthorized) {
          generatedRoutes.push(
            isAuthenticated
              ? route
              : {
                  path: route.path,
                  element: <Navigate to={fallbackPath} replace />,
                }
          );
        }
        if (isUnauthorized) {
          generatedRoutes.push(
            !isAuthenticated
              ? route
              : {
                  path: route.path,
                  element: <Navigate to={fallbackPath} replace />,
                }
          );
        }
      });
    }
  }

  return generatedRoutes;
};
