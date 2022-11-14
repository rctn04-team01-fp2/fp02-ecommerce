import React from 'react';
import ProductCard from '../components/product-card';
import useProducts from '../hooks/use-products';
import useGetCategories, { CategoriesType } from '../hooks/use-get-catagories';

export default function ProductsPage() {
  const [category, setCategory] = React.useState<CategoriesType>('all');
  const { products } = useProducts();
  const categories = useGetCategories();

  const onChangeCategories = React.useCallback(
    (_category: CategoriesType) => {
      setCategory((prev) => (prev === _category ? 'all' : _category));
    },
    [setCategory],
  );

  return (
    <>
      <h1 className="bold text-xmd font-bold ml-36 my-16">Products</h1>
      <div className="flex w-3/4 flex-row gap-8 m-auto justify-center mb-32">
        {categories.map((_category, index) => (
          <button
            className="font-sans font-bold text-base text-baseWhite bg-purple bg-opacity-80 hover:opacity-80 px-64 py-8 border-none w-full rounded-small "
            key={_category}
            onClick={() => onChangeCategories(_category)}
          >
            {_category}
          </button>
        ))}
      </div>
      <div className="flex-wrap gap-64 row-gap-25 flex-row flex justify-center">
        {category === 'all'
          ? products.map((product) => (
              <ProductCard
                data={{
                  id: product.id,
                  category: product.category,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                }}
                key={product.id}
              />
            ))
          : products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductCard
                  data={{
                    id: product.id,
                    category: product.category,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  }}
                  key={product.id}
                />
              ))}
      </div>
    </>
  );
}
