import { useDispatch } from 'react-redux';
import * as React from 'react';
import { logout } from '../features/user/user-slice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

      navigate('/');
    }
  }, [localStorage]);

  return { onLogout };
}
