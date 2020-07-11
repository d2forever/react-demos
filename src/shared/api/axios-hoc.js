import React from 'react';
import axios from 'axios';

export const useAxiosHOC = (baseURL, authorization) => WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isLoading: false, errors: []};
      this.axiosHook = this.initializeAxiosHOC();
    }

    initializeAxiosHOC = () => {
      const axiosHook = axios.create({
        baseURL: baseURL,
        headers: {
          Authorization: authorization
        }
      });

      axiosHook.interceptors.request.use(config => {
        this.setState({ isLoading: true });
        return config;
      }, error => {
        this.setState({ isLoading: false });
        return Promise.reject(error);
      });

      axiosHook.interceptors.response.use(response => {
        this.setState({ isLoading: false });
        return response;
      }, error => {
        this.setState({ isLoading: false });
        this.handleErrors(error);
        return Promise.reject(error);
      });

      return axiosHook;
    }

    handleErrors = error => {
      const errorResponse = error.response;

      if(!errorResponse) {
        return this.setState({ errors: [error.message] });
      }

      const dataErrors = error.response.data.errors;
      if(!dataErrors) {
        return this.setState({ errors: "SOMETHING WENT WRONG!!!" });
      }

      if(Array.isArray(dataErrors)) {
        return this.setState({ errors: error.response.data.errors });
      }

      return this.setState({ errors: [error.response.data.errors] });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          axiosHook={this.axiosHook}
        />
      )
    }
  }
};
