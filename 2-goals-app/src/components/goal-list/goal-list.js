import React from 'react';
import { FlatList } from 'react-native';

const GoalList = ({ goals = [], itemComponent: Item, handleDeleteItem }) => (
  <FlatList
    data={goals}
    renderItem={({ item }) => (
      <Item
        key={item.key}
        label={item.value}
        handleDeleteItem={() => handleDeleteItem(item)}
      />
    )}
  />
);

export default GoalList;
