import { IOrder } from '@/types/oder.interface';

import { instance } from '@/API/api.interceptor';

export const OrderService = {
  async getOrders() {
    return instance<IOrder[]>({
      url: '/orders',
      method: 'GET',
    });
  },
};
