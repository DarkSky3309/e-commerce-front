import { IStatistics } from '@/types/statistics.interface';

import { instance } from '@/API/api.interceptor';

export const StatisticsService = {
  async getStatistics() {
    return instance<IStatistics>({
      url: '/statistics/main',
      method: 'GET',
    });
  },
};
