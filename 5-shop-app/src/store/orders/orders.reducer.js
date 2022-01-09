import Order from '../../models/order';
import { ADD_ORDER } from './orders.actions';

const initialState = {
  orders: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.items,
        action.amount,
        new Date()
      );

      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
    default:
      return state;
  }
};
