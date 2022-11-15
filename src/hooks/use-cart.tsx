import { useSelector } from 'react-redux';
import { selectCarts } from '../features/cart/cart-slice';
import * as React from 'react';

export function useCart(props: { username: string }) {
  const { carts: _carts } = useSelector(selectCarts);
  const carts = React.useMemo(() => {
    const _cart = _carts.find((cart) => cart.username);
    if (_cart) {
      return _cart.products;
    } else {
      return [];
    }
  }, [_carts]);
  return { carts };
}
