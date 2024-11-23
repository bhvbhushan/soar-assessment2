import axiosInstance from '_api/axios';
import { nestedDataInterface } from '_interfaces';
import { AxiosRequestConfig, AxiosError, AxiosRequestHeaders } from 'axios';

interface SuccessResponseData<T> {
  success: boolean;
  data: T | string;
}

export const axiosFunctionWrapper = async <T>(
  axiosConfig: AxiosRequestConfig,
  errorHandler?: (error: AxiosError) => SuccessResponseData<T>
): Promise<SuccessResponseData<T>> => {
  try {
    const response = await axiosInstance(axiosConfig);
    const successResponse: SuccessResponseData<T> = {
      success: true,
      data: response.data,
    };

    return successResponse;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    if (errorHandler) {
      return errorHandler(axiosError);
    } else {
      // Default error handling
      if (axiosError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return {
          success: false,
          data: `Error: ${axiosError.response.status} - ${axiosError.response.statusText}`,
        };
      } else if (axiosError.request) {
        // The request was made but no response was received
        return {
          success: false,
          data: 'Error: No response received from server',
        };
      } else {
        // Something happened in setting up the request that triggered an Error
        return { success: false, data: `Error: ${axiosError.message}` };
      }
    }
  }
};

export const axiosRequestWrapper = async <T>(
  url: string,
  method?: 'get' | 'post' | 'put',
  data?: nestedDataInterface | FormData,
  headers?: AxiosRequestHeaders
): Promise<SuccessResponseData<T>> => {
  const config = {
    method: method ? method : 'get',
    url: url,
    data: data,
    headers: headers,
  };

  const response = await axiosFunctionWrapper<T>(config);
  return response;
};
