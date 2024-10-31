import axios, { InternalAxiosRequestConfig } from "axios";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }
  config.withCredentials = true;
  return config;
}

export const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

apiClient.interceptors.request.use(authRequestInterceptor);
