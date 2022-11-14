import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAdmin } from '../features/product/product-slice';
import { ProductModel } from '../features/product/types';

interface Props {
  data: ProductModel;
  isLast: boolean;
}
export default function StockItem({ data, isLast }: Props) {
  const [value, setValue] = useState(data.qty);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <tr
      className={`bg-white dark:bg-gray-800 ${
        !isLast ? 'border-b dark:border-gray-700' : ''
      }`}
    >
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          src={data.image}
          alt="product-image"
          className="object-contain"
          style={{
            width: '100px',
            height: '100px',
            alignSelf: 'center',
          }}
        />
      </th>
      <td
        className="py-4 px-6 flex flex-wrap gap-8 my-8"
        style={{
          width: '300px',
        }}
      >
        <p className="font-bold">{data.title}</p>
        <p>{data.description}</p>
      </td>
      <td className="py-4 px-6">{data.category}</td>
      <td className="py-4 px-6">{data.price}</td>
      <td className="py-4 px-6 ">
        <div className="flex gap-16">
          <input
            type="number"
            name="qty"
            id="qty"
            value={value}
            min="0"
            max="1000"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(Number(e.target.value));
              Number(e.target.value) === data.qty
                ? setShow(false)
                : setShow(true);
            }}
            className="border-b text-center"
          />

          {show && (
            <button
              className="font-sans font-bold text-base text-purple hover:opacity-80 px-8 py-4  shadow-normal  rounded-small border-purple"
              style={{
                borderWidth: '1px',
              }}
              onClick={() => {
                dispatch(
                  updateAdmin({
                    ...data,
                    qty: Number(value),
                  }),
                );
                setShow(false);
              }}
            >
              update
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}
