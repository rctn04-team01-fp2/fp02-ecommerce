import React from 'react';
import useSales from '../hooks/use-sales';

export default function RekapPenjualan() {
  const { sales } = useSales();
  console.log(sales);
  return <div>RekapPenjualan</div>;
}
