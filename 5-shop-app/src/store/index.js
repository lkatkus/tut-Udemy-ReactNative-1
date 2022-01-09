import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer } from './products';
import { cartReducer } from './cart';
import { ordersReducer } from './orders';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
