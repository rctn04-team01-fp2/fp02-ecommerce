import { CartProductModel } from '../features/cart/types';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { sellUser } from '../features/product/product-slice';
import { clearCart } from '../features/cart/cart-slice';
import { toast } from 'react-toastify';

export default function useCheckout({
  username,
  carts,
}: {
  username: string;
  carts: CartProductModel[];
}) {
  const dispatch = useDispatch();
  const onCheckout = React.useCallback(() => {
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
  }, [carts]);
  return { onCheckout };
}
