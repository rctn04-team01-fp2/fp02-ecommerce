import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import productData from '../../utils/product-data';
import { ProductModel } from './types';

export interface ProductState {
  products: ProductModel[];
  sales: ProductModel[];
}

//https://www.w3schools.com/js/js_random.asp
//auto set qty

const initialState: ProductState = {
  products: productData.map((item) => ({
    ...item,
    qty: Math.floor(Math.random() * 100) + 1,
  })),
  sales: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateAdmin(state, action: PayloadAction<ProductModel>) {
      const { id, qty } = action.payload;

      state.products = state.products.map((item) => ({
        ...item,
        qty: item.id === id ? qty : item.qty,
      }));
    },
    sellUser(state, action: PayloadAction<ProductModel[]>) {
      const userProducts = action.payload;

      userProducts.map((user) => {
        const foundProductSales = state.sales.findIndex(
          (item) => item.id === user.id,
        );
        const foundProductStock = state.products.findIndex(
          (item) => item.id === user.id,
        );
        //update sales product
        if (foundProductSales >= 0) {
          state.sales[foundProductSales].qty += user.qty;
        } else {
          state.sales.push(user);
        }
        //update product
        if (foundProductStock >= 0) {
          state.products[foundProductStock].qty -= user.qty;
        }
      });
    },
  },
});

export const { sellUser, updateAdmin } = productSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productSlice.reducer;
