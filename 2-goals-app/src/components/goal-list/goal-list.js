import React from 'react';
import { FlatList } from 'react-native';

const GoalList = ({ goals = [], itemComponent: Item }) => (
  <FlatList
    data={goals}
    renderItem={({ item }) => <Item key={item.key} label={item.value} />}
  />
);

export default GoalList;
