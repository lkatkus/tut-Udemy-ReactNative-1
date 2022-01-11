import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    margin: 20,
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
  touchableContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
  },
  detailsContainer: {
    height: 300,
    padding: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  titleLabel: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
  priceLabel: {
    fontFamily: 'open-sans',
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const ProductItem = ({ item, handleSelect, children }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.touchableContainer}>
        <TouchableComponent onPress={handleSelect} useForeground>
          <View style={styles.detailsContainer}>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <View style={styles.details}>
              <Text style={styles.titleLabel}>{item.title}</Text>
              <Text style={styles.priceLabel}>
                ${Number(item.price).toFixed(2)}
              </Text>
            </View>
            <View style={styles.buttonsContainer}>{children}</View>
          </View>
        </TouchableComponent>
      </View>
    </View>
  );
};

export default ProductItem;
