import { instance } from '@/API/api.interceptor';
import { IStatistics } from '@/types/statistics.interface';

export const StatisticsService = {
    async getStatistics() {
        return instance<IStatistics>({
            url: '/statistics/main',
            method: 'GET',
        });
    }
}