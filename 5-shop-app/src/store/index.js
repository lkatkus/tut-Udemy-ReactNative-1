import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer } from './products';

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
