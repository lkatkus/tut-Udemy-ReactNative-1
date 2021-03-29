import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { ScreenContainer } from '../containers';
import { MealDetails, HeaderButton } from '../components';
import { mealsActions } from '../store/actions';

const styles = StyleSheet.create({});

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state.meals.meals);
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const isFavorite = favoriteMeals.some((meal) => meal.id === mealId);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Favorite'
            iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
            onPress={() => dispatch(mealsActions.toggleFavorite(mealId))}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, isFavorite]);

  return (
    <ScreenContainer>
      <MealDetails meal={selectedMeal} />
    </ScreenContainer>
  );
};

export default MealDetailsScreen;
