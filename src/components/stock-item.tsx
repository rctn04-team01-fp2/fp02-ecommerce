import React from 'react';
import { useDispatch } from 'react-redux';
import { colors } from '../colors';
import { updateAdmin } from '../features/product/product-slice';
import { ProductModel } from '../features/product/types';
import useTextInput from '../hooks/use-text-input';
import useToast from '../hooks/use-toast';

interface Props {
  data: ProductModel;
  isLast: boolean;
}
export default function StockItem({ data, isLast }: Props) {
  const [value, onChangeValue] = useTextInput(data.qty);
  const dispatch = useDispatch();
  const { fireToast } = useToast();

  const onUpdateProduct = React.useCallback(() => {
    dispatch(
      updateAdmin({
        ...data,
        qty: Number(value),
      }),
    );

    fireToast('success', `Product ${data.title} berhasil diupdate`);
  }, []);

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
            onChange={onChangeValue}
            className="border-b text-center"
          />

          <button
            className="font-sans font-bold text-base text-purple hover:opacity-80 px-8 py-4  shadow-normal  rounded-small border-purple"
            style={{
              borderWidth: '1px',
              ...(value === data.qty || value < 0
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
            disabled={value === data.qty}
            onClick={onUpdateProduct}
          >
            Update
          </button>
        </div>
      </td>
    </tr>
  );
}
