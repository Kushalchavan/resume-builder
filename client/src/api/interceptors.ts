import axiosInstance from "./api";
import { logoutUser } from "./authApi";

export function setupAxiosInterceptors(onLogout: () => void) {
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // You can attach headers here later if needed
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If JWT expired or unauthorized
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Auto logout (backend will clear cookies)
          await logoutUser();
          onLogout(); // remove user from context
        } catch (e) {
          console.error("Logout failed:", e);
        }
      }
      return Promise.reject(error.response?.data || error);
    }
  );
}
