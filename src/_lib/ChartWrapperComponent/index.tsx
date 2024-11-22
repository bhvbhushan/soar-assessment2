import { dimension } from '_constants';
import { ChartComponent, ModuleComponent } from '_lib';

interface chartWrapperPropsInterface {
  type: string;
  width: dimension;
}

const ChartWrapperComponent: React.FC<chartWrapperPropsInterface> = ({
  type,
  width,
}) => {
  return (
    <ModuleComponent primaryHeader="Weekly Activity" width={width}>
      <ChartComponent type={type} />
    </ModuleComponent>
  );
};

export default ChartWrapperComponent;
