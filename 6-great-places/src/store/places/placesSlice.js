import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  places: [],
};

const getPlaces = createAsyncThunk('places/getPlaces', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (data) => data.json()
  );

  return res;
});

class Place {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    addPlace: (state, { payload }) => {
      const newPlace = new Place(Date.now(), payload.name);

      state.places = state.places.concat(newPlace);
    },
  },
  extraReducers: {
    [getPlaces.fulfilled]: (state, payload) => {
      console.log('getPlaces.fulfilled', payload);
    },
  },
});

export const actions = { ...placesSlice.actions, getPlaces };
export const reducer = placesSlice.reducer;
