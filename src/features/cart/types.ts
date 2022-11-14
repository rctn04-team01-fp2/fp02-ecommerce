import { ProductModel } from '../product/types';

export interface CartProductModel extends ProductModel {
  cartQty: number;
}

export interface CartModel {
  username: string;
  products: CartProductModel[];
}
