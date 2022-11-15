import { useCart } from '../hooks/use-cart';
import useUser from '../hooks/use-user';
import * as Icons from 'react-feather';
import { CartProductModel } from '../features/cart/types';
import useCheckout from '../hooks/use-checkout';
import useCartItemAction from '../hooks/use-cart-item-action';
import * as React from 'react';

function CartItem(props: { cart: CartProductModel }) {
  const { cart } = props;
  const { username } = useUser();
  const {
    cartQty,
    onDecrease,
    onIncrease,
    onRemoveCart,
    onUpdateCart,
    onChangeCartQty,
  } = useCartItemAction({ username, cart });

  return (
    <div key={cart.id}>
      <h3>{cart.title}</h3>
      <button onClick={onRemoveCart}>
        <Icons.Trash size={24} />
      </button>
      <button onClick={onDecrease} disabled={cartQty <= 0}>
        <Icons.Minus />
      </button>
      <input type="number" min={0} value={cartQty} onChange={onChangeCartQty} />
      <button onClick={onIncrease} disabled={cart.qty <= cartQty}>
        <Icons.Plus />
      </button>

      {cartQty !== cart.cartQty && (
        <button onClick={onUpdateCart}>Update</button>
      )}
    </div>
  );
}

export default function Cart() {
  const { username } = useUser();
  // TODO - CART
  const { carts } = useCart({ username });
  const { onCheckout } = useCheckout({ username, carts });

  return (
    <div>
      {carts.map((cart) => (
        <CartItem cart={cart} key={cart.id} />
      ))}
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}
