import Cookies from 'js-cookie';
import { IAuthResponse, ITokens } from '@/store/user/user.inteface';

export const saveTokenStorage = (tokens: ITokens) => {
  Cookies.set('accessToken', tokens.access_token);
  Cookies.set('refreshToken', tokens.refresh_token);
};

export const removeTokenStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

export const saveToStorage = (data: IAuthResponse) => {
  saveTokenStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};