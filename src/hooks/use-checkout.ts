import { CartProductModel } from '../features/cart/types';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { sellUser } from '../features/product/product-slice';
import { clearCart } from '../features/cart/cart-slice';

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
  }, [carts]);
  return { onCheckout };
}
