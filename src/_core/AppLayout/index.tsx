import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AppRouteStructure } from '_core/AppRoutes';
import { generateRoutes } from '_helpers';
import { AppContentView } from '_lib';

const AppLayout: React.FC = () => {
  /**
   * :TODO: Need to change it this is for testing purpose only
   */

  const isAuthenticated = false;

  const routes = useRoutes(
    generateRoutes({
      isAuthenticated,
      AppRouteStructure,
    })
  );
  console.log({ routes });
  return (
    <>
      (
      <AppContentView routes={routes} />)
    </>
  );
};

export default AppLayout;
