import Order from '../../models/order';
import { ADD_ORDER, SET_ORDER } from './orders.actions';

const initialState = {
  orders: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orders: action.orders,
      };
    case ADD_ORDER:
      const newOrder = new Order(
        action.order.id,
        action.order.items,
        action.order.amount,
        action.order.date
      );

      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
    default:
      return state;
  }
};
