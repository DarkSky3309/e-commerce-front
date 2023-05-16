import { IProduct } from '@/types/product.interface';

export interface ICartItem{
  id: number;
  product: IProduct;
  quantity: number;
  price: number;
  size: TypeSize;
}

export type TypeSize = "SHORT" | "TALL" | "GRANDE" | "VENTI";
