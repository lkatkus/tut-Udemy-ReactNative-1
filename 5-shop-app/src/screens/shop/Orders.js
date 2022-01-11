import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { OrderItem } from '../../components';

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);

  if (orders.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>You have no orders.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => {
        return (
          <OrderItem
            items={item.items}
            date={item.readableDate}
            amount={item.totalAmount}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 20,
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 16
  }
});

export default Orders;
