import { useSelector } from 'react-redux';
import { selectCarts } from '../features/cart/cart-slice';
import * as React from 'react';

export function useCart(props: { username: string }) {
  const { carts: _carts } = useSelector(selectCarts);
  const carts = React.useMemo(
    () =>
      _carts.find((cart) => cart.username === props.username)?.products ?? [],
    [_carts],
  );
  return { carts };
}
