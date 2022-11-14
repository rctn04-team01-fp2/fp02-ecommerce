import { useSelector } from 'react-redux';
import { selectProducts } from '../features/product/product-slice';

export default function useSales() {
  const { sales } = useSelector(selectProducts);
  return { sales };
}
