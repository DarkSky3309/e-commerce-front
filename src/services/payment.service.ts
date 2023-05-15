import { instance } from '@/API/api.interceptor';
import { IPayment } from '@/types/payment.interface';

export const PaymentService = {
  async createPayment(amount: number) {
    return instance<IPayment>({
      url: '/payment',
      method: 'POST',
      data: {
        amount,
      },
    });
  },
};