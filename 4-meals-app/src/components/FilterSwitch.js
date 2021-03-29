import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 8,
  },
});

const FilterSwitch = ({ title, isSelected, handleChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{title}</Text>
      <Switch
        value={isSelected}
        onValueChange={handleChange}
        thumbColor={colors.primary}
        trackColor={{ true: colors.secondary, false: '#ccc' }}
      />
    </View>
  );
};

export default FilterSwitch;
