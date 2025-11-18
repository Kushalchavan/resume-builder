/// <reference types="vite/client" />

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

// GLOBAL INTERCEPTOR FOR ERRORS
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error.message ||
      "Something went wrong";

    return Promise.reject(new Error(message));
  }
);

export default axiosInstance;
