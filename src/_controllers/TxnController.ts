import { axiosRequestWrapper } from '_helpers';
import { trxDataInterface } from '_interfaces';

export const getTransactionData = async () => {
  const response =
    await axiosRequestWrapper<trxDataInterface[]>('/api/transactions');
  return response;
};
