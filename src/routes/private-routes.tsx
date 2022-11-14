import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav-bar';
import NotFound from '../pages/not-found';
import { getToken, isAdmin, isUser } from '../helpers';

interface Props {
  type: string;
}

export default function PrivateRoutes({ type }: Props) {
  const auth = isUser(type) ? isUser(getToken()!) : isAdmin(getToken()!);

  //eslint-disable-next-line
  return auth ? (
    <>
      <Navbar auth={true} />
      <Outlet />
    </>
  ) : (
    <NotFound />
  );
}
