import { IPayment } from '@/types/payment.interface';

import { instance } from '@/API/api.interceptor';

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
