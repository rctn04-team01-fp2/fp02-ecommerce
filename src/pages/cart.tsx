import { useCart } from '../hooks/use-cart';
import useUser from '../hooks/use-user';
import * as Icons from 'react-feather';
import { CartProductModel } from '../features/cart/types';
import useCheckout from '../hooks/use-checkout';
import useCartItemAction from '../hooks/use-cart-item-action';
import useToast from '../hooks/use-toast';
import * as React from 'react';
import { TableHead } from '../components/table-head';
import { cartTableHead } from '../utils/table-head';
import { useNavigate } from 'react-router-dom';
import CatAnimation from '../components/cat-animated';
import { colors } from '../colors';

function CartItem(props: { cart: CartProductModel }) {
  const { cart } = props;
  const { fireToast } = useToast();
  const { username } = useUser();
  const {
    cartQty,
    onDecrease,
    onIncrease,
    onRemoveCart,
    onUpdateCart,
    onChangeCartQty,
  } = useCartItemAction({ username, cart });

  React.useEffect(() => {
    if (cart.qty === cartQty) {
      fireToast('error', `${cart.title} telah mencapai batas maksimum`);
    }
  }, [cartQty]);

  const disabledUpdate = cartQty > cart.qty || cartQty === cart.cartQty;

  return (
    <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 ">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text"
      >
        <div className="flex flex-wrap items-center gap-12">
          <img
            src={cart.image}
            alt="product-image"
            className="object-contain"
            style={{
              width: '100px',
              height: '100px',
              alignSelf: 'center',
            }}
          />
          <h3>{cart.title}</h3>
        </div>
      </th>
      <td className="py-4 px-6 text-center">{cart.price}</td>
      <td
        key={cart.id}
        className="py-4 px-6  flex items-center mt-fifteen pl-32"
      >
        <div className="flex gap-12 m-auto">
          <div className="border w-fit flex rounded-small">
            <button
              onClick={onDecrease}
              disabled={cartQty <= 1}
              className="border-r"
            >
              <Icons.Minus />
            </button>
            <input
              className="text-center "
              type="number"
              min={0}
              disabled
              max={1000}
              value={cartQty}
              onChange={onChangeCartQty}
            />
            <button
              onClick={onIncrease}
              disabled={cart.qty <= cartQty}
              className="border-l"
            >
              <Icons.Plus />
            </button>
          </div>
          <button onClick={onRemoveCart}>
            <Icons.Trash size={24} />
          </button>
        </div>
      </td>
      <td className="py-4 px-6 text-center">{cartQty * cart.price}</td>
      <td>
        <button
          className={`font-sans font-bold text-base  hover:opacity-80 px-8 py-4  shadow-normal  rounded-small ${
            disabledUpdate
              ? 'text-black bg-baseDisabled border-baseDisabled cursor-not-allowed'
              : 'text-purple border-purple'
          } `}
          style={{
            borderWidth: '1px',
            ...(disabledUpdate
              ? {
                  backgroundColor: colors.baseGrey,
                  color: colors.baseWhite,
                  borderColor: colors.baseGrey,
                  opacity: 0.5,
                  cursor: 'not-allowed',
                }
              : {
                  backgroundColor: 'white',
                  color: colors.purple,
                  borderColor: colors.purple,
                }),
          }}
          onClick={onUpdateCart}
          disabled={disabledUpdate}
        >
          Update
        </button>
      </td>
    </tr>
  );
}

export default function Cart() {
  const { username } = useUser();
  const navigate = useNavigate();
  const { carts } = useCart({ username });
  const { onCheckout } = useCheckout({ username, carts });

  const totals = React.useMemo(() => {
    const temp = carts.reduce(
      (acc, { cartQty, price }) => acc + cartQty * price,
      0,
    );
    return temp;
  }, [carts]);

  return (
    <div
      className="overflow-x-auto  relative m-auto pb-12 w-100 flex flex-col mt-25"
      style={{ width: 'fit-content', minWidth: '70%' }}
    >
      {!!carts.length && (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <TableHead data={cartTableHead} />
          {carts.map((cart) => (
            <CartItem cart={cart} key={cart.id} />
          ))}
          <div
            className="fixed text-right"
            style={{
              right: '15%',
            }}
          >
            <p className="text-smd">Total </p>
            <p className="text-md  font-bold">${totals}</p>
            <button
              onClick={onCheckout}
              className="font-sans font-bold text-base text-baseWhite bg-purple bg-opacity-80 hover:opacity-80 px-8 py-8 rounded-md border-none w-fit"
            >
              Checkout
            </button>
          </div>
        </table>
      )}
      {!carts.length && (
        <div className="flex flex-col items-center justify-center min-h-screen gap-12">
          <CatAnimation />
          There is no items in the cart
          <button
            onClick={() => navigate('/products')}
            className="font-sans font-bold text-base text-baseWhite bg-purple bg-opacity-80 hover:opacity-80 px-8 py-8 rounded-md border-none w-fit"
          >
            See Product
          </button>
        </div>
      )}
    </div>
  );
}
