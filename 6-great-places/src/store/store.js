import { configureStore } from '@reduxjs/toolkit';

import { reducer as placesReducer } from './places/placesSlice';

export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
