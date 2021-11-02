import { createSelector } from '@reduxjs/toolkit';

const placesState = (state) => state.places;

const getPlaces = createSelector(placesState, (state) => state.places);
const getPlaceById = (placeId) =>
  createSelector(placesState, (state) =>
    state.places.find(({ id }) => id === placeId)
  );

export const selectors = {
  getPlaces,
  getPlaceById,
};
