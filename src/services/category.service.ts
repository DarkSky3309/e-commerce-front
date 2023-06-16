import { ICategory } from '@/types/category.interface';

import { instance } from '@/API/api.interceptor';

export const CategoryService = {
  async getCategories() {
    return instance<ICategory[]>({
      url: '/categories',
      method: 'GET',
    });
  },

  async getCategoryById(id: number | string) {
    return instance<ICategory>({
      url: '/categories/' + id,
      method: 'GET',
    });
  },

  async getCategoryBySlug(slug: string) {
    return instance<ICategory>({
      url: '/categories/slug/' + slug,
      method: 'GET',
    });
  },

  async createCategory() {
    return instance<ICategory>({
      url: '/categories',
      method: 'POST',
    });
  },

  async updateCategory(id: number | string, name: string) {
    return instance<ICategory>({
      url: '/categories/' + id,
      method: 'PUT',
      data: { name },
    });
  },

  async deleteCategory(id: number | string) {
    return instance<ICategory>({
      url: '/categories/' + id,
      method: 'DELETE',
    });
  },
};
