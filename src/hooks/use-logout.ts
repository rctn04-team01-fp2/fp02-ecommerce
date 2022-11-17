import { useDispatch } from 'react-redux';
import * as React from 'react';
import { logout } from '../features/user/user-slice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useToast from './use-toast';

export default function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fireToast } = useToast();

  const onLogout = React.useCallback(async () => {
    const result = await Swal.fire({
      title: 'Apakah anda yakin untuk logout ?',
      showCancelButton: true,
      cancelButtonText: 'Tidak',
      cancelButtonColor: 'red',
      confirmButtonText: 'Ya',
      icon: 'warning',
    });

    if (result.isConfirmed) {
      localStorage.removeItem('login-token');

      dispatch(logout());

      fireToast('info', 'Anda telah logout');

      navigate('/');
    }
  }, [localStorage]);

  return { onLogout };
}
