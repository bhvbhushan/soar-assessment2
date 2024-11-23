import { axiosRequestWrapper } from '_helpers';
import { userDataInterface } from '_interfaces';

export const getUserProfile = async () => {
  const response = await axiosRequestWrapper<userDataInterface>('/api/me');

  return response;
};
