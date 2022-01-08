import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../store/cart';
import colors from '../../constants/colors';

const ProductDetails = (props) => {
  const productId = props.route.params.product.id;
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: currentProduct.imageUrl }} />
      <View style={styles.container}>
        <View style={styles.actions}>
          <Button
            color={colors.primary}
            title='Add to Cart'
            onPress={() => dispatch(addToCart(currentProduct))}
          />
        </View>
        <Text style={styles.price}>${currentProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{currentProduct.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProductDetails;
