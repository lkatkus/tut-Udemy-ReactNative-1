import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

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
    <View>
      <Text>Your Orders:</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View>
            <Text>{JSON.stringify(item)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Orders;
