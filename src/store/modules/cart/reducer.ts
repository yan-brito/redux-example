import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: []
} 

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
  switch(action.type) {
    case ActionTypes.addProductToCartSuccess: {
      const { product } = action.payload;

      const productInCartIndex = draft.items.findIndex(item => 
        item.product.id === product.id  
      );

      if(productInCartIndex >= 0) {
        draft.items[productInCartIndex].quantity++;
        break;
      }

      draft.items.push({
        product,
        quantity: 1,
      });

      break;
    }

    case ActionTypes.addProductToCartFailure: {
      draft.failedStockCheck.push(action.payload.productId);

      break;
    }

    case ActionTypes.removeProductFromCart: {
      draft.items = draft.items.filter(item => item.product.id !== action.payload.productId);
      draft.failedStockCheck = draft.failedStockCheck.filter(productId => productId  !== action.payload.productId);

      break;
    }

    case ActionTypes.emptyCart: {
      draft.items = [];
      draft.failedStockCheck = [];

      break;
    }

    default: {
      return draft;
    }
  }
})
}

export default cart;