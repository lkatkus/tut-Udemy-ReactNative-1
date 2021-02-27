import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from './../constants/colors';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

export default Header;