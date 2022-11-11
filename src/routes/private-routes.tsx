import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav-bar';
import { getToken } from '../helpers';
import { NotFound } from '../pages/not-found';

export const PrivateRoutes = () => {
  const token = getToken();

  //eslint-disable-next-line
  return token ? (
    <>
      <Navbar auth={true} />
      <Outlet />
    </>
  ) : (
    <NotFound />
  );
};
