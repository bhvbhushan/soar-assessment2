import { ChartComponent, ModuleComponent } from '_lib';

import React from 'react';

const ChartWrapperComponent = ({ type, width }) => {
  return (
    <ModuleComponent primaryHeader="Weekly Activity" width={width}>
      <ChartComponent type={type} />
    </ModuleComponent>
  );
};

export default ChartWrapperComponent;
