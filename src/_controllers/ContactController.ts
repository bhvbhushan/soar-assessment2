import { axiosRequestWrapper } from '_helpers';
import { nestedDataInterface } from '_interfaces';

export const getAllContacts = async () => {
  const response = await axiosRequestWrapper('/api/contacts');
  return response;
};

export const sendMoney = async (data: nestedDataInterface) => {
  const response = await axiosRequestWrapper('/api/send-money', 'post', data);
  return response;
};
