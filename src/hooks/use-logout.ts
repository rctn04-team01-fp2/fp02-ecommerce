import { useDispatch } from 'react-redux';
import * as React from 'react';
import { logout } from '../features/user/user-slice';
import { toast } from 'react-toastify';

export default function useLogout() {
  const dispatch = useDispatch();

  const onLogout = React.useCallback(() => {
    localStorage.removeItem('login-token');
    dispatch(logout());
    toast.info('Anda telah logout', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }, [localStorage]);

  return { onLogout };
}
