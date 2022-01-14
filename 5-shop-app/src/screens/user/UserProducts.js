import React from 'react';
import { Alert, Button, FlatList } from 'react-native';
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

  const handleDeleteProduct = (item) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this product?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteProduct(item.id));
          dispatch(deleteFromCart(item.id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={userProducts}
      renderItem={({ item }) => (
        <ProductItem item={item}>
          <Button
            title='Edit'
            color={colors.secondary}
            onPress={() => handleEditProduct(item)}
          />
          <Button
            title='Delete'
            color={colors.primary}
            onPress={() => handleDeleteProduct(item)}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProducts;
