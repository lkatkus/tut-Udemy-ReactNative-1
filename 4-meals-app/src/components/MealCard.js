import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    height: 200,
    maxWidth: '100%',
    borderRadius: 10,
    backgroundColor: '#e5e5e5',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
});

const MealCard = ({
  title,
  duration,
  complexity,
  affordability,
  imageUrl,
  handleNavigateRecipe,
}) => (
  <View style={styles.wrapper}>
    <TouchableOpacity onPress={handleNavigateRecipe}>
      <View>
        <View style={{ ...styles.row, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.row, ...styles.mealDetails }}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default MealCard;
