import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { sellUser } from '../product/product-slice';
import { ProductModel } from '../product/types';
import { CartModel } from './types';

export interface CartState {
  carts: CartModel[];
}

const initialState: CartState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    checkout(state, action: PayloadAction<{ username: string }>) {
      const username = action.payload.username;
      const foundUser = state.carts.findIndex(
        (cart) => cart.username === username,
      );
      if (foundUser > -1) {
        const products = state.carts[foundUser].products;
        sellUser(products);
        //delete cart
        state.carts.splice(foundUser, 1);
      }
    },
    addCart(
      state,
      action: PayloadAction<{ username: string; product: ProductModel }>,
    ) {
      const { product, username } = action.payload;
      //check-user
      const foundUser = state.carts.findIndex(
        (cart) => cart.username === username,
      );
      //notFound
      if (foundUser <= -1) {
        state.carts.push({ username, products: [product] });
      } else {
        const foundProduct = state.carts[foundUser].products.findIndex(
          (cartProduct) => cartProduct.id === product.id,
        );
        //product not exist
        if (foundProduct <= -1) {
          state.carts[foundUser].products.push(product);
        } else {
          //add qty
          state.carts[foundUser].products[foundProduct].qty += product.qty;
        }
      }
    },
    updateCart(state, action: PayloadAction<CartModel>) {
      const { products, username } = action.payload;
      const foundUser = state.carts.findIndex(
        (cart) => cart.username === username,
      );
      //replace product
      if (foundUser > -1) {
        state.carts[foundUser].products = [...products];
      }
    },
    removeCartProduct(
      state,
      action: PayloadAction<{ username: string; product: ProductModel }>,
    ) {
      const { product, username } = action.payload;
      const foundUser = state.carts.findIndex(
        (cart) => cart.username === username,
      );

      if (foundUser > -1) {
        const foundProduct = state.carts[foundUser].products.findIndex(
          (cartProduct) => cartProduct.id === product.id,
        );
        if (foundProduct > -1) {
          state.carts[foundUser].products.splice(foundProduct, 1);
        }
      }
    },
  },
});

export const { addCart, checkout, removeCartProduct, updateCart } =
  cartSlice.actions;
export const selectCarts = (state: RootState) => state.cart;
export default cartSlice.reducer;
