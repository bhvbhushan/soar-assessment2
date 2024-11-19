import React from 'react';
import PropTypes from 'prop-types';
import { AppLoader } from '_lib';
import { AppSuspenseInterface } from '_interfaces';

const AppSuspense: React.FC<AppSuspenseInterface> = (props) => {
  const { children } = props;
  return <React.Suspense fallback={<AppLoader />}>{children}</React.Suspense>;
};

AppSuspense.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppSuspense;
