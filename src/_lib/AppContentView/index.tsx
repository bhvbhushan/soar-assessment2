import React from 'react';
import AppSuspense from '_lib/AppSuspense';
import { AppContent } from '_interfaces';

const AppContentView: React.FC<AppContent> = (props) => {
  const { routes } = props;
  return (
    <>
      <AppSuspense>{routes}</AppSuspense>
    </>
  );
};

export default AppContentView;
