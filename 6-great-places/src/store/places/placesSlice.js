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
  constructor(id, data) {
    this.id = id;
    this.title = data.title;
    this.images = data.images;
  }
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    addPlace: (state, { payload }) => {
      const newPlace = new Place(Date.now(), payload);

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
