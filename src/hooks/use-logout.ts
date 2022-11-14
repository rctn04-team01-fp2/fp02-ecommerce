import { useDispatch } from 'react-redux';
import * as React from 'react';
import { logout } from '../features/user/user-slice';

export default function useLogout() {
  const dispatch = useDispatch();

  const onLogout = React.useCallback(() => {
    localStorage.removeItem('login-token');
    dispatch(logout());
  }, [localStorage]);

  return { onLogout };
}
