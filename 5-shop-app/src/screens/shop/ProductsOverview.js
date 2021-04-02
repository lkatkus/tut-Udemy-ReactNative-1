import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverview = () => {
  const products = useSelector((store) => store.products.availableProducts);

  return (
    <View>
      <Text>ProductsOverview</Text>
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ProductsOverview;
