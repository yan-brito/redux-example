import { ActionTypes, IProduct } from './types';


export function addProductToCardRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCardRequest,
    payload: {
      product,
    }
  };
}

export function addProductToCardSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCardSuccess,
    payload: {
      product,
    }
  };
}

export function addProductToCardFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCardFailure,
    payload: {
      productId,
    }
  };
}