import { instance } from '@/API/api.interceptor';
import { IDataUser, IFullUser, IUser } from '@/types/user.interface';

export const UserService = {
  async getProfile() {
    return instance<IFullUser>({
      url: '/users/profile',
      method: 'GET',
    });
  },

  async updateProfile(data: IDataUser) {
    return instance<IUser>({
      url: '/users/profile',
      method: 'PUT',
      data,
    });
  },

  async toggleFavorite(productId: number | string) {
    return instance<IUser>({
      url: '/users/profile/favorites/' + productId,
      method: 'PATCH',
    });
  },
};