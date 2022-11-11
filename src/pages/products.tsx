import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../features/product/product-slice';
import ProductCard from '../components/product-card';

export default function ProductsPage() {
  const { products } = useSelector(selectProducts);

  return (
    <>
      <h1 className="bold text-xmd font-bold ml-36 my-16">Products</h1>
      <div className="flex-wrap gap-64 row-gap-25 flex-row flex justify-center">
        {products.map((item) => (
          <ProductCard
            data={{
              id: item.id,
              category: item.category,
              title: item.title,
              price: item.price,
              image: item.image,
            }}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}
