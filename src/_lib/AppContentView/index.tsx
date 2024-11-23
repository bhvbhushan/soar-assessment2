import React from 'react';
import AppSuspense from '_lib/AppSuspense';
import { AppContent } from '_interfaces';
import { DashboardLayoutComponent } from '_lib';

const AppContentView: React.FC<AppContent> = (props) => {
  const { routes } = props;

  return (
    <>
      <DashboardLayoutComponent>
        <AppSuspense>{routes}</AppSuspense>
      </DashboardLayoutComponent>
    </>
  );
};

export default AppContentView;
