export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    productId,
  };
};

export const deleteFromCart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    productId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
