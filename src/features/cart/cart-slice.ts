import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartModel, CartProductModel } from './types';

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
    clearCart(state, action: PayloadAction<{ username: string }>) {
      const username = action.payload.username;
      const foundUser = state.carts.findIndex(
        (cart) => cart.username === username,
      );
      if (foundUser > -1) {
        state.carts.splice(foundUser, 1);
      }
    },
    addCart(
      state,
      action: PayloadAction<{ username: string; product: CartProductModel }>,
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
          state.carts[foundUser].products[foundProduct].cartQty +=
            product.cartQty;
        }
      }
    },
    updateCart(
      state,
      action: PayloadAction<{ username: string; product: CartProductModel }>,
    ) {
      const { product, username } = action.payload;
      const foundUser = state.carts.findIndex(
        (cart) => cart.username === username,
      );
      //replace product
      if (foundUser > -1) {
        const result = state.carts[foundUser].products.map((cart) => ({
          ...cart,
          cartQty: cart.id === product.id ? product.cartQty : cart.cartQty,
        }));

        state.carts[foundUser].products = [...result];
      }
    },
    removeCartProduct(
      state,
      action: PayloadAction<{ username: string; product: CartProductModel }>,
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

export const { addCart, clearCart, removeCartProduct, updateCart } =
  cartSlice.actions;
export const selectCarts = (state: RootState) => state.cart;
export default cartSlice.reducer;
