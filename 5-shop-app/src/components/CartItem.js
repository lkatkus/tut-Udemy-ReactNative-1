import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants';

const CartItem = ({ handleOnRemove, item }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Text style={styles.text}>{item.title}</Text>
      </View>

      <View style={styles.itemData}>
        <Text style={styles.text}>${item.sum.toFixed(2)}</Text>
        {handleOnRemove && (
          <TouchableOpacity
            onPress={handleOnRemove}
            style={styles.deleteButton}
          >
            <Ionicons
              size={23}
              color={colors.primary}
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    color: '#888',
    fontSize: 16,
    fontFamily: 'open-sans',
    marginRight: 10,
  },
  text: { fontFamily: 'open-sans-bold', fontSize: 16 },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
