import * as React from 'react';

import { ProductModel } from '../features/product/types';
import * as Icons from 'react-feather';

export default function ProductCard(props: ProductModel) {
  const {
    title,
    category,
    description,
    // id,
    image,
    price,
    qty: productQty,
  } = props;

  const [qty, setQty] = React.useState(0);
  const onDecrease = () => setQty((prev) => prev - 1);
  const onIncrease = () => setQty((prev) => prev + 1);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQty(parseFloat(e.target.value));
  };

  return (
    <div className="flex flex-col shadow-sm hover:shadow-lg shadow-shadowPurple justify-between p-64 m-64 lg:flex-row gap-64">
      <div className="flex justify-between flex-col gap-64">
        <div className="bg-lilac p-16 leading-none text-purple text-center align-center justify-center max-w-fit">
          {category}
        </div>
        <img
          className="object-cover self-center"
          src={image}
          alt={title}
          loading="lazy"
          width="325"
          height="325"
        />
      </div>
      <div className="flex flex-col gap-16 justify-between">
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
            <button onClick={onDecrease} className="hover:opacity-80">
              <Icons.Minus />
            </button>
            <input
              id="product-qty"
              name="product-qty"
              type="text"
              value={qty}
              onChange={onChange}
              className="p-4 border-x mx-8 border-black text-center font-sans"
            />
            <button onClick={onIncrease} className="hover:opacity-80">
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
        <button className="font-sans font-bold text-base text-baseWhite bg-purple hover:opacity-80 px-64 py-8 rounded-md border-none w-full  md:w-fit">
          Add to Card
        </button>
      </div>
    </div>
  );
}
