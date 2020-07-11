import React, { useEffect } from 'react';
import { useAxiosRetryHook } from '../../shared/api/axios-retry';

const AxiosRetry = () => {
  const { axiosHook } = useAxiosRetryHook({
    baseURL: 'http://localhost:3001',
    retries: 3,
    retryDelay: 1000,
  });

  useEffect(() => {
    const testAPI = async () => {
      // console.log(axiosHook);
      const response = await axiosHook.get('/');
      // console.log(response);
    };
    testAPI();
  }, []);

  return (
    <div>
      <div>123</div>
    </div>
  );
};

export default AxiosRetry;
