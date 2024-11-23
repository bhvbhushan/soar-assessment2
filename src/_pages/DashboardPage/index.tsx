import { useAlert } from '_context';
import {
  getExpenseCategoryData,
  getMonthlyBalanceData,
  getWeeklyData,
} from '_controllers';
import { nestedDataInterface } from '_interfaces';
import {
  CardWrapperComponent,
  ChartWrapperComponent,
  TransactionsListComponent,
  TransferModule,
} from '_lib';
import { SectionWrapper } from '_styledComponents';
import { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [weeklyData, setWeeklyData] = useState<nestedDataInterface>();
  const [expenseData, setExpenseData] = useState<nestedDataInterface>();
  const [balanceData, setBalanceData] = useState<nestedDataInterface>();
  const { showError } = useAlert();

  useEffect(() => {
    const getChartData = async () => {
      const { success: wSuccess, data: wData } = await getWeeklyData();
      if (wSuccess) {
        setWeeklyData(wData as nestedDataInterface);
      } else {
        const message = 'Error fetching Weekly Activity data';
        showError(message);
      }
      const { success: mSuccess, data: mData } = await getMonthlyBalanceData();
      if (mSuccess) {
        setBalanceData(mData as nestedDataInterface);
      } else {
        const message = 'Error fetching Monthly Balance data';
        showError(message);
      }
      const { success: eSuccess, data: eData } = await getExpenseCategoryData();
      if (eSuccess) {
        setExpenseData(eData as nestedDataInterface);
      } else {
        const message = 'Error fetching Expense Category data';
        showError(message);
      }
    };
    getChartData();
  }, []);
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
          data={weeklyData}
        />

        <ChartWrapperComponent
          type="pie"
          width={'40%'}
          header="Expense Statistics"
          data={expenseData}
        />
      </SectionWrapper>
      <SectionWrapper CompHeight="30%">
        <TransferModule />
        <ChartWrapperComponent
          type="line"
          width={'60%'}
          header="Balance History"
          data={balanceData}
        />
      </SectionWrapper>
    </>
  );
};

export default DashboardPage;
