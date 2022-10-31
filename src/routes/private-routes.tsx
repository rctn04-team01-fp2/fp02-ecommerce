import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { NotFound } from '../pages/not-found';
import { userData } from '../utils/account-data';

export const PrivateRoutes = () => {
  const token = localStorage.getItem('login-token');
  const isAuth = userData.filter((user) => user.token === token);
  return isAuth.length ? <Outlet /> : <NotFound />;
};
