import { ICategory } from '@/types/category.interface';
import { IReview } from '@/types/review.interface';

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  reviews: IReview[];
  images: string[];
  created_at: Date;
  category: ICategory;
}

export interface IDataProduct {
  name: string;
  price: number;
  description?: string;
  images: string[];
  category: number;
}

export type TypeDataFilters = {
  sortBy?: string;
  searchTerms?: string;
  page?: number | string;
  perPage?: number | string;
}

export type TypeProduct = {
  products: IProduct[];
}

export type TypePaginationProducts = {
  products: IProduct[];
  length: number;
}