import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetails = (props) => {
  const productId = props.route.params.product.id;
  const currentProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <View>
      <Text>{currentProduct.title}</Text>
    </View>
  );
};

export default ProductDetails;
