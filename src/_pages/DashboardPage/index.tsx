import {
  CardWrapperComponent,
  ChartWrapperComponent,
  TransactionsListComponent,
} from '_lib';
import { SectionWrapper } from '_styledComponents';

const DashboardPage = () => {
  return (
    <>
      <SectionWrapper CompHeight="30%">
        <CardWrapperComponent />
        <TransactionsListComponent />
      </SectionWrapper>
      <SectionWrapper CompHeight="40%">
        <ChartWrapperComponent type="bar" width={'60%'} />
        <ChartWrapperComponent type="pie" width={'40%'} />
      </SectionWrapper>
      <SectionWrapper CompHeight="30%">
        <TransactionsListComponent />
        <ChartWrapperComponent type="line" width={'60%'} />
      </SectionWrapper>
    </>
  );
};

export default DashboardPage;
