import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ccc',
  },
});

const GoalItem = ({ label, handleDeleteItem }) => (
  <TouchableOpacity onPress={handleDeleteItem}>
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default GoalItem;
