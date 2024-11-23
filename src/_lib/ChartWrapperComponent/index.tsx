import { dimension } from '_constants';
import { nestedDataInterface } from '_interfaces';
import { ChartComponent, ModuleComponent } from '_lib';

interface chartWrapperPropsInterface {
  type: string;
  width: dimension;
  header: string;
  data: nestedDataInterface;
}

const ChartWrapperComponent: React.FC<chartWrapperPropsInterface> = ({
  type,
  width,
  header,
  data,
}) => {
  return (
    <ModuleComponent primaryHeader={header} width={width}>
      <ChartComponent type={type} data={data} />
    </ModuleComponent>
  );
};

export default ChartWrapperComponent;
