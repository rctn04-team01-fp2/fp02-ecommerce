import { CartProductModel } from '../features/cart/types';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { sellUser } from '../features/product/product-slice';
import { clearCart } from '../features/cart/cart-slice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

interface Props {
  username: string;
  carts: CartProductModel[];
}

export default function useCheckout(props: Props) {
  const { carts, username } = props;
  const dispatch = useDispatch();

  const onCheckout = React.useCallback(async () => {
    const result = await Swal.fire({
      title: 'apakah anda yakin untuk checkout ?',
      cancelButtonText: 'Tidak',
      cancelButtonColor: 'red',
      showCancelButton: true,
      confirmButtonText: 'Yakin',
      icon: 'question',
    });
    if (result.isConfirmed) {
      dispatch(sellUser(carts));

      dispatch(clearCart({ username }));

      toast.success('Barang anda berhasil dicheckout', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [carts]);
  return { onCheckout };
}
