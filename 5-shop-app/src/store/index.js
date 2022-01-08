import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer } from './products';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
