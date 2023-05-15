import Cookies from 'js-cookie';
import axios from 'axios';
import { IAuthResponse } from '@/store/user/user.inteface';
import { getContentType } from '@/API/api.helper';
import { saveToStorage } from '@/services/auth/auth.helper';

export const AuthService = {
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');

    const response  = await axios.post<string, {data: IAuthResponse}>(
      process.env['SERVER_URL '] + '/auth/login/access-token',
      {refreshToken},
      {
        headers: getContentType()
      }
    )

    if (response.data.access_token) {
      saveToStorage(response.data);
    }
  }

}

