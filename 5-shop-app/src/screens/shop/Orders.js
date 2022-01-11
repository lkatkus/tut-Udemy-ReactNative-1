import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { OrderItem } from '../../components';

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);

  if (orders.length === 0) {
    return (
      <View>
        <Text>You have no orders.</Text>
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

export default Orders;
