import { useEffect } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';

interface IMessagesType {
  messages: string | string[] | undefined;
}

interface IAxiosRetryHook {
  baseURL: string;
  retries: number;
  retryDelay: number;
}

export const useAxiosRetryHook = (props: IAxiosRetryHook) => {
  let { baseURL, retries, retryDelay } = props;

  const axiosHook = axios.create({
    baseURL: baseURL,
  });

  useEffect(() => {
    settingAxiosRetry();
  }, [baseURL, retries, retryDelay]);

  const settingAxiosRetry = (): void => {
    if (!retries) retries = 0;
    if (!retryDelay) retryDelay = 0;

    axiosRetry(axiosHook, { retries: retries, retryDelay: () => retryDelay });
  };

  const parseError = (messages: IMessagesType) => {
    if (!messages)
      return Promise.reject({ messages: ['エラーが発生しました。'] });
    if (messages instanceof Array)
      return Promise.reject({ messages: messages });
    return Promise.reject({ messages: [messages] });
  };

  const parseBody = (response: any) => {
    if (response.status === 200) return response.data.result;
    else return parseError(response.data.messages); // Error like warning raise by server
  };

  axiosHook.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.log('request: ', error);
      return Promise.reject(error);
    }
  );

  axiosHook.interceptors.response.use(
    (response) => {
      return parseBody(response);
    },
    (error) => {
      console.log('response: ', error);
      if (error.response) return parseError(error.response.data);
      else return Promise.reject(error);
    }
  );

  return { axiosHook };
};
