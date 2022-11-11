import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductDetailCard from '../components/product-detail-card';
import { selectProducts } from '../features/product/product-slice';

export default function ProductPage() {
  const params = useParams();
  const { productId } = params;
  const { products } = useSelector(selectProducts);
  const product = useMemo(
    () => products.filter((item) => item.title === productId),
    [productId],
  );

  return (
    <div>
      <ProductDetailCard {...product[0]} />
    </div>
  );
}
