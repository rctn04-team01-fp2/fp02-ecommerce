import { useSelector } from 'react-redux';
import { selectCarts } from '../features/cart/cart-slice';
import * as React from 'react';

export function useCart(props: { username: string }) {
  const { carts } = useSelector(selectCarts);
  const _carts = React.useMemo(
    () =>
      carts.find((cart) => cart.username === props.username)?.products ?? [],
    [carts],
  );
  return { _carts };
}
