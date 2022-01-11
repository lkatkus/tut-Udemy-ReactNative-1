import React from 'react';
import { Button, View, FlatList } from 'react-native';
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

export default ProductsOverview;
