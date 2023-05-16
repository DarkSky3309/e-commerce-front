import { ICartItem, TypeSize } from '@/types/cart.interface';

export interface ICartInitialState {
  items: ICartItem[];
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'increase' | 'decrease';
}


export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
  size: TypeSize;
}