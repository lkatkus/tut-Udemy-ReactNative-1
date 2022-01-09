import React from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { colors } from '../../constants';
import { CartItem } from '../../components';
import { removeFromCart, clearCart } from '../../store/cart';
import { addOrder } from '../../store/orders';

const getItemsList = (itemsData) => {
  const itemKeys = Object.keys(itemsData);

  return itemKeys.map((key) => ({ id: key, ...itemsData[key] }));
};

const CardScreen = () => {
  const currentCart = useSelector((state) => state.cart);
  const cartItems = getItemsList(currentCart.items);
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          <Text>Total:</Text>
          <Text style={styles.amount}>
            ${currentCart.totalAmount.toFixed(2)}
          </Text>
        </Text>
        <Button
          title='Order now'
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(addOrder(currentCart.items, currentCart.totalAmount));
            dispatch(clearCart());
          }}
        />
      </View>
      <View>
        <Text>Cart Items:</Text>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => {
            return (
              <CartItem
                item={item}
                handleOnRemove={() => dispatch(removeFromCart(item.id))}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { margin: 20 },
  summary: {
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  amount: {
    color: colors.primary,
  },
});

export default CardScreen;
