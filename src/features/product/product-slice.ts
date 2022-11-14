import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartProductModel } from '../cart/types';
import { ProductModel } from './types';

export interface ProductState {
  products: ProductModel[];
  sales: CartProductModel[];
}

//https://www.w3schools.com/js/js_random.asp
//auto set qty
async function fetchProducts() {
  try {
    const result = await fetch('https://fakestoreapi.com/products');
    const response = await result.json();
    return response;
  } catch (e) {
    return e;
  }
}

export const useGetProducts = createAsyncThunk('products', async () => {
  try {
    const result = await fetchProducts();
    return result;
  } catch (e) {
    return e;
  }
});

const initialState: ProductState = {
  products: [],
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
    sellUser(state, action: PayloadAction<CartProductModel[]>) {
      const carts = action.payload;
      //increase sales
      const sales = state.sales.map((item) => {
        const foundItem = carts.find((cart) => cart.id === item.id);
        if (foundItem) {
          return { ...item, cartQty: foundItem.cartQty + item.cartQty };
        }
        return { ...item };
      });
      //decrease product
      const products = state.products.map((item) => {
        const foundItem = carts.find((cart) => cart.id === item.id);
        if (foundItem) {
          return { ...item, qty: item.qty - foundItem.cartQty };
        }
        return { ...item };
      });

      state.sales = [...sales];
      state.products = [...products];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(useGetProducts.pending, (state) => {
        return { products: [], sales: [] };
      })
      .addCase(
        useGetProducts.fulfilled,
        (state, action: PayloadAction<ProductModel[]>) => {
          const products = action.payload.map((product) => {
            const qty = Math.floor(Math.random() * 10) + 1;
            return { ...product, qty };
          });
          const sales = products.map((product) => ({ ...product, cartQty: 0 }));
          return { products, sales };
        },
      )
      .addCase(useGetProducts.rejected, (state) => {
        return { ...initialState };
      });
  },
});

export const { sellUser, updateAdmin } = productSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productSlice.reducer;
