import { MEALS } from '../../data/mock-meals';

import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );

      if (existingIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex, 1);

        return { ...state, favoriteMeals: updatedFavoriteMeals };
      } else {
        const updatedFavoriteMeals = state.favoriteMeals.concat(
          state.meals.find((meal) => meal.id === action.mealId)
        );

        return {
          ...state,
          favoriteMeals: updatedFavoriteMeals,
        };
      }
    case SET_FILTERS:
      const filters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (filters.vegan && !meal.isVegan) {
          return false;
        }
        if (filters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        return true;
      });

      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default reducer;
