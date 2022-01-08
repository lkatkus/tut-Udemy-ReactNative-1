import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../store/cart';
import { ProductItem } from '../../components';

const ProductsOverview = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.availableProducts);

  return (
    <View>
      <View>
        <FlatList
          data={products}
          renderItem={(product) => {
            return (
              <ProductItem
                handleToCartClick={() => dispatch(addToCart(product.item))}
                handleDetailsClick={() => {
                  navigation.navigate('ProductDetailsScreen', {
                    product: product.item,
                  });
                }}
                {...product}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductsOverview;
