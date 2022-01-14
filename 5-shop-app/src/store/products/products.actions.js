export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const updateProduct = (productId, product) => {
  return {
    type: UPDATE_PRODUCT,
    productId,
    product,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId,
  };
};
