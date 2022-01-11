import React from 'react';
import { Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ProductItem } from '../../components';
import { colors } from '../../constants';
import { deleteFromCart } from '../../store/cart';
import { deleteProduct } from '../../store/products';

const UserProducts = ({ navigation }) => {
  const dispatch = useDispatch();
  const userProducts = useSelector((state) => state.products.userProducts);

  const handleEditProduct = (product) => {
    navigation.navigate({
      name: 'EditProductScreen',
      params: {
        product,
      },
    });
  };

  return (
    <FlatList
      data={userProducts}
      renderItem={({ item }) => (
        <ProductItem item={item} handleSelect={() => {}}>
          <Button
            title='Edit'
            color={colors.secondary}
            onPress={() => handleEditProduct(item)}
          />
          <Button
            title='Delete'
            color={colors.primary}
            onPress={() => {
              dispatch(deleteProduct(item.id));
              dispatch(deleteFromCart(item.id));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProducts;
