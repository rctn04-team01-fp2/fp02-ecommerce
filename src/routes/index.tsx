import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages';
import { Cart } from '../pages/cart';
import LoginPage from '../pages/login';
import { NotFound } from '../pages/not-found';
import { ProductPage } from '../pages/product';
import ProductsPage from '../pages/products';
import { PrivateRoutes } from './private-routes';

export const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/products" element={<ProductsPage />}>
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};
