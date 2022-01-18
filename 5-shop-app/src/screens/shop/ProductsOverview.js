import React from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../store/cart';
import { fetchProducts } from '../../store/products';
import { ProductItem } from '../../components';
import { colors } from '../../constants';

const ProductsOverview = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { navigation } = props;
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.availableProducts);

  const loadProducts = React.useCallback(async () => {
    setIsRefreshing(true);
    setError(null);

    try {
      await dispatch(fetchProducts());
    } catch (e) {
      setError(e.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', async () => {
      setIsLoading(true);
      await loadProducts();
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>An error occurred!</Text>
        <Button title='Try again' onPress={loadProducts} />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products available. Try adding some!</Text>
      </View>
    );
  }

  return (
    <View>
      <View>
        <FlatList
          refreshing={isRefreshing}
          onRefresh={loadProducts}
          data={products}
          renderItem={(product) => {
            return (
              <ProductItem
                handleSelect={() => {
                  navigation.navigate('ProductDetailsScreen', {
                    product: product.item,
                  });
                }}
                {...product}
              >
                <Button
                  title='View Details'
                  onPress={() => {
                    navigation.navigate('ProductDetailsScreen', {
                      product: product.item,
                    });
                  }}
                />
                <Button
                  title='To Cart'
                  onPress={() => dispatch(addToCart(product.item))}
                />
              </ProductItem>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    marginBottom: 10,
  },
});

export default ProductsOverview;
