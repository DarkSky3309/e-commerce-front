import { IDataProduct, IProduct, TypeDataFilters } from '@/types/product.interface';
import { instance } from '@/API/api.interceptor';

export const ProductService = {
  async getProducts(queryData?: TypeDataFilters) {
    return instance<IProduct[]>({
      url: '/products',
      method: 'GET',
      //CAN MAKE BUGS
      params: queryData ? queryData : undefined,
    });
  },



  async getSimilarProducts(productId: number | string) {
    return instance<IProduct[]>({
      url: '/products/similar/' + productId,
      method: 'GET',
    });
  },

  async getProductById(productId: number | string) {
    return instance<IProduct>({
      url: '/products/' + productId,
      method: 'GET',
    });
  },

  async getProductBySlug(slug: string) {
    return instance<IProduct>({
      url: '/products/slug/' + slug,
      method: 'GET',
    });
  },

  async getProductsByCategory(categoryId: number | string) {
    return instance<IProduct[]>({
      url: '/products/category/' + categoryId,
      method: 'GET',
    });
  },

  async createProduct() {
    return instance<IProduct>({
      url: '/products',
      method: 'POST',
    });
  },

  async updateProduct(productId: number | string, data: IDataProduct) {
    return instance<IProduct>({
      url: '/products/' + productId,
      method: 'PUT',
      data,
    });
  },

  async deleteProduct(productId: number | string) {
    return instance<IProduct>({
      url: '/products/' + productId,
      method: 'DELETE',
    });
  },
};