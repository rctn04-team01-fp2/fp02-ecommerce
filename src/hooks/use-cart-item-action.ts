import * as React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartProduct, updateCart } from '../features/cart/cart-slice';
import { CartProductModel } from '../features/cart/types';

export default function useCartItemAction({
  username,
  cart,
}: {
  username: string;
  cart: CartProductModel;
}) {
  const dispatch = useDispatch();
  const [cartQty, setCartQty] = React.useState(cart.cartQty);

  const onIncrease = React.useCallback(() => {
    setCartQty((prev) => prev + 1);
  }, []);

  const onDecrease = React.useCallback(() => {
    setCartQty((prev) => prev - 1);
  }, []);

  const onRemoveCart = React.useCallback(() => {
    const product = { ...cart, cartQty };
    dispatch(removeCartProduct({ username, product }));
  }, [username, removeCartProduct]);

  const onUpdateCart = React.useCallback(() => {
    const product = { ...cart, cartQty };
    dispatch(updateCart({ username, product }));
  }, [username, cartQty, cart]);

  const actions = React.useMemo(
    () => ({ cartQty, onIncrease, onDecrease, onRemoveCart, onUpdateCart }),
    [],
  );
  return actions;
}
