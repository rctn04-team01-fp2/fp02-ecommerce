import { useSelector } from 'react-redux';
import ProductDetailCard from '../components/product-detail-card';
import { selectProducts } from '../features/product/product-slice';
import * as React from 'react';

export default function ExamplePage() {
  const { products } = useSelector(selectProducts);
  return (
    <>
      <ProductDetailCard product={products[0]} />
    </>
  );
}
