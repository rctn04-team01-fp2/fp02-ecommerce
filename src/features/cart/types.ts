import { ProductModel } from '../product/types';

export interface CartModel {
  username: string;
  products: ProductModel[];
}
