import React from 'react';
import { useSelector } from 'react-redux';
import { Text, StyleSheet } from 'react-native';

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
const CategoryMealsScreen = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <ScreenContainer>
      {displayedMeals.length === 0 ? (
        <Text style={styles.label}>No meals found. Check your filters</Text>
      ) : (
        <MealList
          availableMeals={displayedMeals}
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

export default CategoryMealsScreen;
