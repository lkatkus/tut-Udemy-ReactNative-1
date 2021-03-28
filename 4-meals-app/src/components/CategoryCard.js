import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
  },
  touchable: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right',
  },
});

const CategoryCard = ({ item, handleNavigateCategory }) => {
  const TouchableComponent =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.wrapper}>
      <TouchableComponent
        style={styles.touchable}
        onPress={handleNavigateCategory}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: item.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryCard;
