import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { colors } from '../constants';
import CartItem from './CartItem';

const OrderItem = ({ amount, date, items = [] }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${amount.toFixed(2)}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      {showDetails && (
        <View style={styles.cartItemContainer}>
          {items.map((item) => (
            <CartItem item={item} />
          ))}
        </View>
      )}
      <Button
        color={colors.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => setShowDetails((prevState) => !prevState)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    margin: 20,
    padding: 10,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  date: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: '#888',
  },
  cartItemContainer: {
    width: '100%',
  },
});

export default OrderItem;
