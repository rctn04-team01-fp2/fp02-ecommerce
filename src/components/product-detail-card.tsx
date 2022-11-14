import * as React from 'react';

import { ProductModel } from '../features/product/types';
import * as Icons from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../features/user/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../features/cart/cart-slice';

interface Props {
  product: ProductModel;
}

export default function ProductDetailCard(props: Props) {
  const {
    title,
    category,
    description,
    // id,
    image,
    price,
    qty: productQty,
  } = props.product;
  const navigate = useNavigate();

  const { token, username } = useSelector(selectUser);
  const dispatch = useDispatch();

  const [qty, setQty] = React.useState(0);

  const onDecrease = React.useCallback(() => setQty((prev) => prev - 1), []);
  const onIncrease = React.useCallback(() => setQty((prev) => prev + 1), []);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQty(parseFloat(e.target.value));
    },
    [],
  );

  const onAddCart = React.useCallback(() => {
    if (token) {
      const product = { ...props.product, qty };
      dispatch(addCart({ username, product }));
    } else {
      navigate('/login');
    }
  }, [qty, username, props.product]);

  return (
    <div className="flex flex-col shadow-sm hover:shadow-lg shadow-shadowPurple  p-64 m-64 lg:flex-row gap-32">
      <div className="flex justify-between flex-col gap-64 flex-1">
        <div className="bg-lilac p-16 leading-none text-purple text-center align-center justify-center max-w-1/2">
          {category}
        </div>
        <img
          className="object-contain"
          src={image}
          alt={title}
          style={{
            width: '325px',
            height: '325px',
          }}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-16 justify-between flex-1">
        <h2 className="font-sans font-bold text-xl  text-baseBlack md:text-5xl">
          {title}
        </h2>
        <p className="font-sans font-normal text-sm text-baseGrey sm:text-3xl">
          Rp {price}
        </p>
        <p className="font-sans font-bold underline text-base text-purple sm:text-xl">
          Product Description
        </p>
        <p className="font-sans font-normal text-base sm:text-xl">
          {description}
        </p>
        <p className="font-sans font-bold underline text-base text-purple sm:text-xl">
          Select Quantity
        </p>

        <div className="flex gap-16 flex-col-reverse md:flex-row lg:gap-64">
          <div className="flex max-w-fit px-8 border border-baseBlack rounded-md">
            <button
              onClick={onDecrease}
              className="hover:opacity-80"
              disabled={qty <= 0}
              style={{
                cursor: qty <= 0 ? 'not-allowed' : 'pointer',
              }}
            >
              <Icons.Minus />
            </button>
            <input
              id="product-qty"
              name="product-qty"
              type="number"
              value={qty}
              onChange={onChange}
              className="p-4 border-x mx-8 border-black text-center font-sans"
              disabled
            />
            <button
              onClick={onIncrease}
              className="hover:opacity-80 "
              disabled={qty >= productQty}
              style={{
                cursor: qty >= productQty ? 'not-allowed' : 'pointer',
              }}
            >
              <Icons.Plus />
            </button>
          </div>
          <div className="flex items-center gap-8">
            <p className="font-sans font text-base text-baseBlack md:text-xl">
              Stock :
            </p>
            <p className="font-sans font-bold text-purple text-base md:text-xl">
              {productQty} Pcs
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <p className="font-sans font text-base text-baseBlack md:text-xl">
            Subtotal :{' '}
          </p>
          <p className="font-sans font-bold text-2xl md:text-sm">
            Rp {price * qty}
          </p>
        </div>
        <button
          onClick={onAddCart}
          className="font-sans font-bold text-base text-baseWhite bg-purple bg-opacity-80 hover:opacity-80 px-64 py-8 rounded-md border-none w-full  md:w-fit"
        >
          Add to Card
        </button>
      </div>
    </div>
  );
}
