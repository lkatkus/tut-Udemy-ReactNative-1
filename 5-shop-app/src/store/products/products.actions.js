import { FIREBASE_APP } from '../../../api-config';
import Product from '../../models/product';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

const PRODUCTS_DB = FIREBASE_APP + '/products.json';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(PRODUCTS_DB);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const loadedProducts = await response.json();
      const products = [];

      for (const key in loadedProducts) {
        const product = loadedProducts[key];

        products.push(
          new Product(
            key,
            'u1',
            product.title,
            product.imageUrl,
            product.description,
            product.price
          )
        );
      }

      dispatch({
        type: SET_PRODUCTS,
        products,
      });
    } catch (e) {
      throw new Error('Something went wrong!');
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      const response = await fetch(PRODUCTS_DB, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      const resData = await response.json();

      dispatch({
        type: ADD_PRODUCT,
        product: { id: resData.name, ...product },
      });
    } catch (e) {
      console.log(e);
    }
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
