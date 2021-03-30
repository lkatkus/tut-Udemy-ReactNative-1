import PRODUCTS from '../../data/mock-products';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export const reducer = (state = initialState, action) => {
  return state;
};
