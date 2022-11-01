import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav-bar';
import { NotFound } from '../pages/not-found';
import { userData } from '../utils/account-data';

export const PrivateRoutes = () => {
  const token = localStorage.getItem('login-token');
  const isAuth = userData.filter((user) => user.token === token);
  //eslint-disable-next-line
  return isAuth.length ? (
    <>
      <Navbar auth={true} />
      <Outlet />
    </>
  ) : (
    <NotFound />
  );
};
