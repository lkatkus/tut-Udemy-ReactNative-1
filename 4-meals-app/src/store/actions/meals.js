export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};

const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    filters,
  };
};

export const actions = { toggleFavorite, setFilters };
