import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { ScreenContainer } from '../containers';
import { MealList } from '../components';

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'open-sans',
    marginVertical: 16,
  },
});

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  return (
    <ScreenContainer>
      {favoriteMeals.length === 0 ? (
        <Text style={styles.label}>You have not added any favorites</Text>
      ) : (
        <MealList
          availableMeals={favoriteMeals}
          handleNavigateRecipe={(item) => {
            navigation.navigate('MealDetails', {
              name: item.title,
              mealId: item.id,
            });
          }}
        />
      )}
    </ScreenContainer>
  );
};

export default FavoritesScreen;
