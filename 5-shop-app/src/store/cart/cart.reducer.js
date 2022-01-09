import CartItem from '../../models/cart-item';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './cart.actions';

const initialState = {
  items: {},
  totalAmount: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return initialState;
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
    case REMOVE_FROM_CART:
      const reducedItem = state.items[action.productId];
      const currentQuantity = reducedItem.quantity;

      if (currentQuantity > 1) {
        const updatedCartItem = new CartItem(
          reducedItem.quantity - 1,
          reducedItem.price,
          reducedItem.title,
          reducedItem.sum - reducedItem.price
        );
        const updatedCartItems = { ...state.items };
        updatedCartItems[action.productId] = updatedCartItem;

        return {
          ...state,
          items: updatedCartItems,
          totalAmount: state.totalAmount - updatedCartItem.price,
        };
      } else {
        const updatedCartItems = { ...state.items };
        delete updatedCartItems[action.productId];

        return {
          ...state,
          items: updatedCartItems,
          totalAmount: state.totalAmount - reducedItem.price,
        };
      }
    default:
      return state;
  }
};
