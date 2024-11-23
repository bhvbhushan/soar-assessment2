import { axiosRequestWrapper } from '_helpers';
import { nestedDataInterface } from '_interfaces';

export const getWeeklyData = async () => {
  const response =
    await axiosRequestWrapper<nestedDataInterface>('/api/weeklyTxn');
  return response;
};

export const getMonthlyBalanceData = async () => {
  const response = await axiosRequestWrapper<nestedDataInterface>(
    '/api/monthlyBalance'
  );
  return response;
};
export const getExpenseCategoryData = async () => {
  const response = await axiosRequestWrapper<nestedDataInterface>(
    '/api/expenseCategory'
  );
  return response;
};
