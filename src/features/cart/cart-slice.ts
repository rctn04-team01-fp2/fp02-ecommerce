import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartModel } from './types';

export interface CartState {
  cart: CartModel[];
}

const initialState: CartState = {
  cart: [],
};

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.cart;
export default productSlice.reducer;
