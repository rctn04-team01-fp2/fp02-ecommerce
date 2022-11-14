import { useSelector } from 'react-redux';
import { selectProducts } from '../features/product/product-slice';

export default function useProducts() {
  const { products } = useSelector(selectProducts);
  return { products };
}
