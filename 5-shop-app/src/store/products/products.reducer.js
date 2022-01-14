import PRODUCTS from '../../data/mock-products';
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from './products.actions';
import Product from '../../models/product';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const productData = action.product;
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        productData.title,
        productData.imageUrl,
        productData.description,
        productData.price
      );

      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.availableProducts.concat(newProduct),
      };
    }
    case UPDATE_PRODUCT: {
      const productData = action.product;
      const userProductIndex = state.userProducts.findIndex(
        (product) => product.id === action.productId
      );
      const availableProductsIndex = state.availableProducts.findIndex(
        (product) => product.id === action.productId
      );
      const updateProduct = new Product(
        state.userProducts[userProductIndex].id,
        state.userProducts[userProductIndex].ownerId,
        productData.title,
        productData.imageUrl,
        productData.description,
        state.userProducts[userProductIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[userProductIndex] = updateProduct;

      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductsIndex] = updateProduct;

      return {
        ...state,
        userProducts: updatedUserProducts,
        availableProducts: updatedAvailableProducts,
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.productId
        ),
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.productId
        ),
      };
    }
    default: {
      return state;
    }
  }
};
