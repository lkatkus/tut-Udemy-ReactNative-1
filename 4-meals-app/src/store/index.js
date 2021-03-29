import { combineReducers } from 'redux';

import { mealsReducer } from './reducers';

export const rootReducer = combineReducers({
  meals: mealsReducer,
});
