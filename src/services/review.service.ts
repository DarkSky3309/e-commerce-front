import { instance } from '@/API/api.interceptor';
import { IDataReview, IReview } from '@/types/review.interface';

export const ReviewService = {
  async getReviews(productId: number) {
    return instance<IReview[]>({
      url: '/reviews/' + productId,
      method: 'GET',
    });
  },

  getAverageRating(productId: number) {
    return instance<number>({
      url: '/reviews/average/' + productId,
      method: 'GET',
    })
  },

  async createReview(productId: number, data: IDataReview) {
    return instance<IReview>({
      url: '/reviews/create/' + productId,
      method: 'POST',
      data,
    });
  },
};