import ProductDetailCard from '../components/product-detail-card';
import * as React from 'react';
import useProducts from '../hooks/use-products';

export default function ExamplePage() {
  const { products } = useProducts();
  return (
    <>
      <ProductDetailCard product={products[0]} />
    </>
  );
}
