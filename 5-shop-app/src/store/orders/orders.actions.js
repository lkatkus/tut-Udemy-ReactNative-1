import { FIREBASE_APP } from '../../../api-config';
import Order from '../../models/order';

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDER = 'SET_ORDER';

const ORDERS_DB = FIREBASE_APP + '/orders/u1.json';

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(ORDERS_DB);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const loadedOrders = await response.json();
      const orders = [];

      for (const key in loadedOrders) {
        const order = loadedOrders[key];

        orders.push(
          new Order(
            key,
            order.cartItems,
            order.totalAmount,
            new Date(order.date)
          )
        );
      }

      dispatch({
        type: SET_ORDER,
        orders,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
};

export const addOrder = (cartItems, totalAmount) => {
  return async (dispatch) => {
    try {
      const orderDate = new Date();
      const response = await fetch(ORDERS_DB, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: orderDate.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();

      dispatch({
        type: ADD_ORDER,
        order: {
          id: resData.name,
          date: orderDate,
          items: cartItems,
          amount: totalAmount,
        },
      });
    } catch (e) {
      throw new Error('Something went wrong!');
    }
  };
};
