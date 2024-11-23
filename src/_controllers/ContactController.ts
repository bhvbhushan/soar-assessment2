import { axiosRequestWrapper } from '_helpers';

export const getAllContacts = async () => {
  const response = await axiosRequestWrapper('/api/contacts');
  return response;
};
