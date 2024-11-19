import { AppSuspenseInterface } from '_interfaces';
import PropTypes from 'prop-types';
import React from 'react';

const AppRoutes: React.FC<AppSuspenseInterface> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

AppRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppRoutes;
