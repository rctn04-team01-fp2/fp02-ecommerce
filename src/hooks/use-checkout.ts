import { CartProductModel } from '../features/cart/types';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { sellUser } from '../features/product/product-slice';
import { clearCart } from '../features/cart/cart-slice';
import useToast from './use-toast';
import Swal from 'sweetalert2';

interface Props {
  username: string;
  carts: CartProductModel[];
}

export default function useCheckout(props: Props) {
  const { carts, username } = props;
  const dispatch = useDispatch();
  const { fireToast } = useToast();

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

      fireToast('success', 'Barang anda berhasil dicheckout');
    }
  }, [carts]);
  return { onCheckout };
}
