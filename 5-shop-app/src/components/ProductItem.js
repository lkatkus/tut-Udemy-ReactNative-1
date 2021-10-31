import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    margin: 20,
    padding: 10,
    height: 300,
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
  image: {
    width: '100%',
    height: '60%',
  },
  titleLabel: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center'
  },
  priceLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const ProductItem = ({ item, handleDetailsClick, handleToCardClick }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text style={styles.titleLabel}>{item.title}</Text>
      <Text style={styles.priceLabel}>${Number(item.price).toFixed(2)}</Text>
      <View style={styles.buttonsContainer}>
        <Button title='View Details' onPress={handleDetailsClick} />
        <Button title='To Card' onPress={handleToCardClick} />
      </View>
    </View>
  );
};

export default ProductItem;
