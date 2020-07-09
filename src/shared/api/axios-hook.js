import React from 'react';
import axios from 'axios';

export const useCustomAxiosHook = (state, baseURL, authorization) => {
  const axiosHook = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: authorization
    }
  });

  const handleErrors = error => {
    const errorResponse = error.response;

    if(!errorResponse) {
      return state.setErrorsState([error.message]);
    }

    const dataErrors = error.response.data.errors;
    if(!dataErrors) {
      return state.setErrorsState("SOMETHING WENT WRONG!!!");
    }

    if(Array.isArray(dataErrors)) {
      return state.setErrorsState(error.response.data.errors);
    }

    return state.setErrorsState([error.response.data.errors]);
  }

  axiosHook.interceptors.request.use(config => {
    state.setIsLoadingState(true);
    return config;
  }, error => {
    state.setIsLoadingState(false);
    return Promise.reject(error);
  });

  axiosHook.interceptors.response.use(response => {
    state.setIsLoadingState(false);
    return response;
  }, error => {
    state.setIsLoadingState(false);
    handleErrors(error);
  });

  return { axiosHook };
};
