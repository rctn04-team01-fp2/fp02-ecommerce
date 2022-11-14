import * as React from 'react';
import { useNavigate } from 'react-router-dom';

interface Data {
  id: number;
  category: string;
  title: string;
  price: number;
  image: string;
}
interface Props {
  data: Data;
}
export default function ProductCard(props: Props) {
  const { image, category, title, price } = props.data;
  const navigate = useNavigate();
  return (
    <div
      className="max-w-2/8 min-w-2/6 h-fit rounded-normal shadow-normal hover:shadow-hover p-8 flex gap-12 flex-col relative "
      style={{
        width: '320px',
      }}
      onClick={() => navigate(`/products/${title}`)}
    >
      <img
        src={image}
        alt="product-image"
        className="object-contain"
        style={{
          width: '300px',
          height: '300px',
          alignSelf: 'center',
        }}
      />
      <p
        className="bg-lilac w-fit pr-8 pl-2 capitalize text-purple relative"
        style={{ left: '-8px' }}
      >
        {category}
      </p>
      <p className="text-16 font-medium p-2  text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </p>
      <p>Rp. {price}</p>
    </div>
  );
}
