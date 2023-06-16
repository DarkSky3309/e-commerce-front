import Cookies from 'js-cookie';

import { IAuthResponse, IEmailPassword } from '@/store/user/user.inteface';

import { instance } from '@/API/api.interceptor';
import { saveToStorage } from '@/services/auth/auth.helper';

export const AuthService = {
  //EXPERIMENTAL!!
  async authorization(type: 'login' | 'register', data: IEmailPassword) {
    const response = await instance<IAuthResponse>({
      url: '/auth/' + type,
      method: 'POST',
      data,
    });

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
    return response.data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');
    if (refreshToken === undefined) {
      throw new Error('refreshToken is undefined');
    }
    const response = await instance<string, { data: IAuthResponse }>({
      url: '/auth/login/access-token',
      method: 'POST',
      data: { refreshToken: refreshToken },
    });
    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
    return response;
  },
};
