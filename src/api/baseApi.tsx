import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from "../utils/tokenUtils";
import { refreshTokenRequest } from "./authApi";
const base_Url = "example.com";

const baseApi: AxiosInstance = axios.create({
  baseURL: base_Url,
  headers: {
    "Content-Type": "application/json",
  },
});
baseApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearar${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

baseApi.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error: any) => {
    if (error.response?.status === 401) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const newAccessToken = await refreshTokenRequest(refreshToken);
          setAccessToken(newAccessToken);
          error.config.headers.authorization = `Bearer ${newAccessToken}`;
          return baseApi(error.config); //
        } catch (refreshError) {
          clearTokens(); //
          // window.location.href = "/login"; // Optionally redirect to login
        }
      }
    }
    return Promise.reject(error);
  }
);

export default baseApi;
