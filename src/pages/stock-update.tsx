import React from 'react';
import { useSelector } from 'react-redux';
import StockItem from '../components/stock-item';
import { TableHead } from '../components/table-head';
import { selectProducts } from '../features/product/product-slice';
import { stockTableHead } from '../utils/table-head';

export default function StockUpdate() {
  const { products } = useSelector(selectProducts);
  return (
    <div
      className="overflow-x-auto relative m-auto pb-12"
      style={{ width: 'fit-content', minWidth: '60%' }}
    >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <TableHead data={stockTableHead} />
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
