import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav-bar';
import NotFound from '../pages/not-found';
import { getToken } from '../helpers';

export default function PrivateRoutes() {
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
}
