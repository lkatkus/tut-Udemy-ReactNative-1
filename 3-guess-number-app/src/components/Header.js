import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

import colors from './../constants/colors';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: Dimensions.get('window').height > 600 ? 80 : 64,
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAndroid: {
    backgroundColor: colors.primary,
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'open-sans-bold',
    borderBottomColor: Platform.OS === 'ios' ? colors.primary : 'white',
  },
});

const Header = ({ title }) => (
  <View
    style={{
      ...styles.header,
      ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid,
      }),
    }}
  >
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

export default Header;
