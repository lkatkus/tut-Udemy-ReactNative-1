import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { OrderItem } from '../../components';
import { fetchOrders } from '../../store/orders';
import { colors } from '../../constants';

const Orders = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  const loadOrders = async () => {
    setIsRefreshing(true);
    await dispatch(fetchOrders());
    setIsRefreshing(false);
  };

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', async () => {
      setIsLoading(true);
      await loadOrders();
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
    );
  }

  if (orders.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>You have no orders.</Text>
      </View>
    );
  }

  return (
    <FlatList
      refreshing={isRefreshing}
      onRefresh={loadOrders}
      data={orders}
      renderItem={({ item }) => {
        return (
          <OrderItem
            key={item.id}
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 20,
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
});

export default Orders;
