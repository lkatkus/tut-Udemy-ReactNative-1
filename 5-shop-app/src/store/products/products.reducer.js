import PRODUCTS from '../../data/mock-products';
import { ADD_PRODUCT, DELETE_PRODUCT } from './products.actions';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log('====================================');
      console.log('ADD_PRODUCT', action.product);
      console.log('====================================');

      return {
        ...state,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.productId
        ),
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.productId
        ),
      };
    default:
      return state;
  }
};
