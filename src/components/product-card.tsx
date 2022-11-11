import * as React from 'react';

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
  const { image, id, category, title, price } = props.data;
  return (
    <div className="min-h-1 bg-purple">
      {title}
      {/* <img src={image} alt="" className="max-h-1/2" /> */}
    </div>
  );
}
