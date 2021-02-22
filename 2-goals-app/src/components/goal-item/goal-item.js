import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ccc'
  },
});

const GoalItem = ({ label }) => (
  <View style={styles.container}>
    <Text>{label}</Text>
  </View>
);

export default GoalItem;
