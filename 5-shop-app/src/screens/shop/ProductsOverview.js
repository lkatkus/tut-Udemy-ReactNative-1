import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductItem } from '../../components';

const ProductsOverview = (props) => {
  const { navigation } = props;
  const products = useSelector((store) => store.products.availableProducts);

  return (
    <View>
      <View>
        <FlatList
          data={products}
          renderItem={(product) => {
            return (
              <ProductItem
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
