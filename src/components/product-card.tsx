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
      className=" p-2 max-w-1/12 min-w-2/6 rounded-normal shadow-normal hover:shadow-hover"
      onClick={() => navigate(`/products/${title}`)}
    >
      <img
        src={image}
        alt="product-image"
        className="max-h-2/5 min-h-2/5 object-fill"
      />
      <p className="bg-lilac w-fit pr-8 pl-2 capitalize text-purple">
        {category}
      </p>
      <p className="text-16 font-medium p-2">{title}</p>
      <p>Rp. {price}</p>
    </div>
  );
}
