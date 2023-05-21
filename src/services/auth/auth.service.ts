import Cookies from 'js-cookie';
import axios from 'axios';
import { IAuthResponse, IEmailPassword } from '@/store/user/user.inteface';
import { getContentType } from '@/API/api.helper';
import { saveToStorage } from '@/services/auth/auth.helper';
import { instance } from '@/API/api.interceptor';
import { ICategory } from '@/types/category.interface';

export const AuthService = {
  //EXPERIMENTAL!!
  async authorization(type: 'login' | 'register', data: IEmailPassword) {
    const response = await instance<IAuthResponse>({
      url: '/auth/' + type,
      method: 'POST',
      data
    })

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
    return response.data;
  },


  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');

    const response  = await axios.post<string, {data: IAuthResponse}>(
      process.env.SERVER_URL + '/auth/login/access-token',
      {refreshToken},
      {
        headers: getContentType()
      }
    )

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
    return response;
  }

}

