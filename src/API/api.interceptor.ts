import axios from 'axios';
import { errorHandler, getContentType } from '@/API/api.helper';
import { getAccessToken, removeTokenAndUserStorage } from '@/services/auth/auth.helper';
import config from 'tailwindcss/defaultConfig';
import { AuthService } from '@/services/auth/auth.service';

export const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: getContentType(),
});

instance.interceptors.request.use(config => {
  const accessToken = getAccessToken();
  if (config && config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(config => config, async error => {
  console.log(error);
  const originalRequest = error.config;
  if (
    (error.response.status === 401 ||
      errorHandler(error) === 'jwt expired' ||
      errorHandler(error) === 'jwt must be provided')
    && error.config
    && !error.config._isRetry
  ) {
    originalRequest._isRetry = true;
    try {
      await AuthService.getNewTokens();
      return instance.request(originalRequest);
    } catch (error) {
      if (errorHandler(error) === 'jwt expired') {
        removeTokenAndUserStorage();
      }
    }
  }
  throw error;
});

