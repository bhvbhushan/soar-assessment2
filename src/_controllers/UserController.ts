import { axiosRequestWrapper } from '_helpers';
import { userDataInterface } from '_interfaces';
import { AxiosRequestHeaders } from 'axios';

export const getUserProfile = async () => {
  const response = await axiosRequestWrapper<userDataInterface>('/api/me');

  return response;
};

export const updateUserData = async (
  data: Partial<userDataInterface>,
  headers?: AxiosRequestHeaders
) => {
  // console.log({ data });
  const response = await axiosRequestWrapper<userDataInterface>(
    '/api/me',
    'put',
    data,
    headers
  );
  return response;
};
