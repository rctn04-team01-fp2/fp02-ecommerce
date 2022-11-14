import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppDispatch } from '../app/store';
import { useGetProducts } from '../features/product/product-slice';
import useProducts from '../hooks/use-products';
import HomePage from '../pages';
import Cart from '../pages/cart';
import ExamplePage from '../pages/examples';
import LoginPage from '../pages/login';
import NotFound from '../pages/not-found';
import ProductPage from '../pages/product';
import ProductsPage from '../pages/products';
import RekapPenjualan from '../pages/rekap-penjualan';
import StockUpdate from '../pages/stock-update';
import PrivateRoutes from './private-routes';

export function GlobalRoutes() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useProducts();

  React.useEffect(() => {
    async function getProducts() {
      await dispatch(useGetProducts());
    }
    if (!products.length) {
      void getProducts();
    }
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/example" element={<ExamplePage />} />
      <Route element={<PrivateRoutes type="user" />}>
        <Route path="/products">
          <Route index element={<ProductsPage />} />
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route element={<PrivateRoutes type="admin" />}>
        <Route path="/rekap-penjualan" element={<RekapPenjualan />} />
        <Route path="/stock-update" element={<StockUpdate />} />
      </Route>
    </Routes>
  );
}
