import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../features/product/product-slice';
import ProductCard from '../components/product-card';

export default function ProductsPage() {
  const { products } = useSelector(selectProducts);
  console.log(products);
  return (
    <div className="min-h-100">
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
  );
}
