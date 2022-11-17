import * as React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { removeCartProduct, updateCart } from '../features/cart/cart-slice';
import { CartProductModel } from '../features/cart/types';
import useToast from './use-toast';

export default function useCartItemAction({
  username,
  cart,
}: {
  username: string;
  cart: CartProductModel;
}) {
  const dispatch = useDispatch();
  const { fireToast } = useToast();
  const [cartQty, setCartQty] = React.useState(cart.cartQty);

  const onChangeCartQty = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCartQty(parseFloat(e.target.value));
    },
    [],
  );

  const onIncrease = React.useCallback(() => {
    setCartQty((prev) => prev + 1);
  }, []);

  const onDecrease = React.useCallback(() => {
    setCartQty((prev) => prev - 1);
  }, []);

  const onRemoveCart = React.useCallback(async () => {
    try {
      const result = await Swal.fire({
        title: `Apakah anda yakin untuk menghapus ${cart.title} ini`,
        showCancelButton: true,
        cancelButtonText: 'Batal',
        cancelButtonColor: 'red',
        confirmButtonText: 'Yakin',
        icon: 'warning',
      });
      if (result.isConfirmed) {
        const product = { ...cart, cartQty };
        dispatch(removeCartProduct({ username, product }));
        fireToast('success', `${cart.title} berhasil dihapus dari keranjang`);
      }
    } catch {
      fireToast('error', `${cart.title} gagal dihapus dari keranjang`);
    }
  }, [username, removeCartProduct, removeCartProduct, dispatch]);

  const onUpdateCart = React.useCallback(() => {
    const product = { ...cart, cartQty };
    dispatch(updateCart({ username, product }));
    fireToast('success', 'Keranjang berhasil diperbarui');
  }, [username, cartQty, cart, updateCart, dispatch]);

  const actions = React.useMemo(
    () => ({
      cartQty,
      onIncrease,
      onDecrease,
      onRemoveCart,
      onUpdateCart,
      onChangeCartQty,
    }),
    [
      cartQty,
      onDecrease,
      onIncrease,
      onRemoveCart,
      onUpdateCart,
      onChangeCartQty,
    ],
  );
  return actions;
}
