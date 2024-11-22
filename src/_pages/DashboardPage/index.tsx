import {
  expenseCategoryData,
  monthlyBalanceData,
  weeklyTxnData,
} from '_constants';
import {
  CardWrapperComponent,
  ChartWrapperComponent,
  TransactionsListComponent,
  TransferModule,
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
        <ChartWrapperComponent
          type="bar"
          width={'60%'}
          header="Weekly Activity"
          data={weeklyTxnData}
        />
        <ChartWrapperComponent
          type="pie"
          width={'40%'}
          header="Expense Statistics"
          data={expenseCategoryData}
        />
      </SectionWrapper>
      <SectionWrapper CompHeight="30%">
        <TransferModule />
        <ChartWrapperComponent
          type="line"
          width={'60%'}
          header="Balance History"
          data={monthlyBalanceData}
        />
      </SectionWrapper>
    </>
  );
};

export default DashboardPage;
