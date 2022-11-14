import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetailCard from '../components/product-detail-card';
import useProducts from '../hooks/use-products';

export default function ProductPage() {
  const params = useParams();
  const { productId } = params;
  const { products } = useProducts();
  const product = useMemo(
    () => products.find((item) => item.id === parseFloat(productId!))!,
    [productId],
  );

  return (
    <div>
      <ProductDetailCard product={product} />
    </div>
  );
}
