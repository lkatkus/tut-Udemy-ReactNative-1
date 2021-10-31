import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductItem } from '../../components';

const ProductsOverview = () => {
  const products = useSelector((store) => store.products.availableProducts);

  return (
    <View>
      <View>
        <FlatList
          data={products}
          renderItem={ProductItem}
        />
      </View>
    </View>
  );
};

export default ProductsOverview;
