import { instance } from '@/API/api.interceptor';
import { IOrder } from '@/types/oder.interface';

export const OrderService = {
  async getOrders() {
    return instance<IOrder[]>({
      url: '/orders',
      method: 'GET',
    })
  }
}