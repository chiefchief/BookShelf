import axios from 'axios';
import {TGenerateOptions, TFormatResponse} from '@types';
import {store} from '../store';

const baseURL = 'http://104.248.26.141:3000/api';

const instance = axios.create();
instance.defaults.baseURL = baseURL;
instance.defaults.timeout = 24000;

export const httpPost = (url: string, data?: any) => sendRequest({method: 'POST', url, data});
export const httpGet = (url: string, params?: any) => sendRequest({method: 'GET', url, params});

const formatResponse: (response?: any) => TFormatResponse = (response = {}) => ({
  data: response.data || {},
  status: response.status || 418,
  statusText: response.statusText || '',
});

const sendRequest = async ({method, url, data = undefined, params = undefined}: TGenerateOptions) => {
  const OPTIONS = generateOptions({method, url, data, params});

  try {
    const response = await instance(OPTIONS);
    return formatResponse(response);
  } catch (error) {
    if (error.response?.status === 408 || error.code === 'ECONNABORTED') {
      throw formatResponse({
        status: 408,
        statusText: 'Request timeout!!',
      });
    }

    throw formatResponse(error.response);
  }
};

const generateOptions = ({method, url, data, params}: TGenerateOptions) => {
  const token = store.getState().user.token;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Language': 'ru',
  };

  const authHeaders = {
    Authorization: `Bearer ${token}`,
  };

  return {
    method,
    url,
    data,
    params,
    headers: {
      ...defaultHeaders,
      ...(token ? authHeaders : {}),
    },
  };
};
