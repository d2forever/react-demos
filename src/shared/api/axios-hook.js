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
    if(error.response) {
      if(error.response.data.errors) {
        if(Array.isArray(error.response.data.errors)) {
          state.setErrorsState(error.response.data.errors);
        } else {
          state.setErrorsState([error.response.data.errors]);
        }
      } else {
        state.setErrorsState("SOMETHING WENT WRONG!!!");
      }
    } else {
      state.setErrorsState([error.message]);
    }
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
