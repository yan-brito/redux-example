import { IProduct } from './types';


export function AddProductToCard(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    }
  };
}