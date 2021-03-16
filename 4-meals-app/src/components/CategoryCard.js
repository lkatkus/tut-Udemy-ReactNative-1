import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: 'grey',
  },
});

const CategoryCard = ({ item, handleNavigateCategory }) => (
  <TouchableOpacity style={styles.container} onPress={handleNavigateCategory}>
    <View>
      <Text>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

export default CategoryCard;
