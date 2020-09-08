import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import store from 'store/configureStore';

export interface IConditions extends AxiosRequestConfig {}

const BASE_URL = process.env.REACT_APP_BASE_URL || '';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 25000,
  withCredentials: false,
});

const handleReject = (error: AxiosError): never => {
  if (error?.response) {
    // store.dispatch(logout());
    console.error(error?.response);
  }

  throw error;
};


export const requestWithoutAuth = (
  options: IConditions,
): Promise<AxiosResponse> => axiosInstance(options).catch(handleReject);
