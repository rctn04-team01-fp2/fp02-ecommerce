import React from 'react';
import { useSelector } from 'react-redux';
import StockItem from '../components/stock-item';
import { selectProducts } from '../features/product/product-slice';

export default function StockUpdate() {
  const { products } = useSelector(selectProducts);
  return (
    <div
      className="overflow-x-auto relative m-auto pb-12"
      style={{ width: 'fit-content', minWidth: '60%' }}
    >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
            <th scope="col" className="py-3 px-6">
              Product Information
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Stock
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <StockItem
              data={product}
              key={product.id}
              isLast={index === products.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
