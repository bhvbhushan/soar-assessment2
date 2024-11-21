import { ChartComponent, ModuleComponent } from '_lib';

import React from 'react';

const ChartWrapperComponent = () => {
  return (
    <ModuleComponent primaryHeader="Weekly Activity" width={'60%'}>
      <ChartComponent />
    </ModuleComponent>
  );
};

export default ChartWrapperComponent;
