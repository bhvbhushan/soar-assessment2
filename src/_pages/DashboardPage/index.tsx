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
      <SectionWrapper CompHeight="30%">
        <ChartWrapperComponent />
        <TransactionsListComponent />
      </SectionWrapper>
      <SectionWrapper CompHeight="30%">
        <ChartWrapperComponent />
        <TransactionsListComponent />
      </SectionWrapper>
    </>
  );
};

export default DashboardPage;
