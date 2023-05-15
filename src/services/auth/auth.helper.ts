import Cookies from 'js-cookie';
import { IAuthResponse, ITokens } from '@/store/user/user.inteface';
import { TOKEN_TYPE } from '@/enums/enums';

export const saveTokenStorage = (tokens: ITokens) => {
  Cookies.set(TOKEN_TYPE.accessToken, tokens.access_token);
  Cookies.set(TOKEN_TYPE.refreshToken, tokens.refresh_token);
};

export const removeTokenAndUserStorage = () => {
  Cookies.remove(TOKEN_TYPE.accessToken);
  Cookies.remove(TOKEN_TYPE.refreshToken);
  localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
  saveTokenStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};

export const getAccessToken = () => {
  return Cookies.get(TOKEN_TYPE.accessToken);
}

export const getUserFromStorage = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return null;
}