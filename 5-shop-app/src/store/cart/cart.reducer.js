import CartItem from '../../models/cart-item';
import { ADD_TO_CART } from './cart.actions';

const initialState = {
  items: {},
  totalAmount: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.product.id;

      if (state.items[productId]) {
        const updatedProduct = state.items[productId];
        const updatedCartItem = new CartItem(
          updatedProduct.quantity + 1,
          updatedProduct.price,
          updatedProduct.title,
          updatedProduct.sum + updatedProduct.price
        );

        return {
          ...state,
          items: {
            ...state.items,
            [productId]: updatedCartItem,
          },
          totalAmount: state.totalAmount + updatedProduct.price,
        };
      } else {
        const addedProduct = action.product;
        const newCartItem = new CartItem(
          1,
          addedProduct.price,
          addedProduct.title,
          addedProduct.price
        );

        return {
          ...state,
          items: {
            ...state.items,
            [productId]: newCartItem,
          },
          totalAmount: state.totalAmount + addedProduct.price,
        };
      }
    default:
      return state;
  }
};
