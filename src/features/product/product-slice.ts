import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ProductModel } from './types';

export interface ProductState {
  products: ProductModel[];
  sales: ProductModel[];
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
  extraReducers: (builder) => {
    builder.addCase(useGetProducts.pending, (state) => {
      return { products: [], sales: [] };
    }).addCase(
      useGetProducts.fulfilled,
      (state, action: PayloadAction<ProductModel[]>) => {
        const products = action.payload.map((product) => {
          const qty = Math.floor(Math.random() * 10) + 1;
          return { ...product, qty };
        });
        return { products, sales: [] };
      },
    ).addCase(useGetProducts.rejected, (state) => {
      return { ...initialState };
    });
  },
});

export const { sellUser, updateAdmin } = productSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productSlice.reducer;
