import { useSelector } from 'react-redux';
import ProductCard from '../components/product-card';
import { selectProducts } from '../features/product/product-slice';
import * as React from 'react';

export default function ExamplePage() {
  const { products } = useSelector(selectProducts);
  return (
    <>
      <ProductCard {...products[0]} />
    </>
  );
}
