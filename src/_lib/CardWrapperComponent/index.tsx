import { Button } from '@mui/material';
import { CardComponent, ModuleComponent } from '_lib';
import { CreditCard } from '_styledComponents';

const CardWrapperComponent = () => {
  const btnComp = <Button>See All</Button>;
  return (
    <ModuleComponent
      primaryHeader="My Cards"
      btnComp={btnComp}
      singleChildCard={false}
      width={'60%'}
    >
      <>
        <CreditCard>
          {(isFocussed) => <CardComponent isFocused={isFocussed} />}
        </CreditCard>

        <CreditCard>
          {(isFocussed) => <CardComponent isFocused={isFocussed} />}
        </CreditCard>
      </>
    </ModuleComponent>
  );
};

export default CardWrapperComponent;
