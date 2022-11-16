import React from 'react';
import { TableHead } from '../components/table-head';
import { CartProductModel } from '../features/cart/types';
import useSales from '../hooks/use-sales';
import { rekapTableHead } from '../utils/table-head';

function RekapItem(props: { cart: CartProductModel }) {
  const { cart } = props;
  return (
    <tr className={`bg-white dark:bg-gray-800 border-b dark:border-gray-700`}>
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white "
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
      <td className="py-4 px-6 ">{cart.price}</td>

      <td className="py-4 px-6">{cart.cartQty * cart.price}</td>
    </tr>
  );
}

export default function RekapPenjualan() {
  const { sales } = useSales();

  const totals = React.useMemo(() => {
    const temp = sales
      .filter((item) => item.cartQty !== 0)
      .reduce((acc, { cartQty, price }) => acc + cartQty * price, 0)
      .toFixed(2);
    return temp;
  }, [sales]);

  return (
    <div
      className="overflow-x-auto  relative m-auto mt-25 pb-12 w-100 flex flex-col"
      style={{ width: 'fit-content', minWidth: '70%' }}
    >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <TableHead data={rekapTableHead} variant="normal" />
        <tbody>
          {!!sales.length &&
            sales
              .filter((item) => item.cartQty !== 0)
              .map((item) => <RekapItem cart={item} key={item.id} />)}
          <tr className={`bg-white dark:bg-gray-800 dark:border-gray-700`}>
            <td></td>
            <td></td>
            <td>
              <div className="">
                <p className="text-smd">Total </p>
                <p className="text-md  font-bold">${totals}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
