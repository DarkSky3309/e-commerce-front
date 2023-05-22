import { IAddToCartPayload, ICartInitialState, IChangeQuantityPayload } from '@/store/cart/cart.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const isExist = state.items.some(item => item.product.id === action.payload.product.id);
      if (!isExist) {
        state.items.push({
          id: state.items.length,
          ...action.payload,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        type === 'increase' ?
          item.quantity++
          :
          item.quantity--;
      }
    },
    resetCart: (state) => {
      state.items = [];
    },
  },
});
