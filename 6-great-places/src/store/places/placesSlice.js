import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as ExpoFileSystem from 'expo-file-system';

import { insertPlace } from '../../utils/db';

class Place {
  constructor({ title, images, address, lat, lng }) {
    this.title = title;
    this.images = images;
    this.address = address;
    this.lat = lat;
    this.lng = lng;
  }
}

const initialState = {
  places: [],
};

const handleFileMove = async (filePath) => {
  const fileName = filePath.split('/').pop();
  const newPath = ExpoFileSystem.documentDirectory + fileName;

  try {
    await ExpoFileSystem.moveAsync({
      from: filePath,
      to: newPath,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }

  return newPath;
};

const addPlace = createAsyncThunk('places/addPlace', async (payload) => {
  let updatedImages = payload.images;

  if (updatedImages.length > 0) {
    updatedImages = await Promise.all(updatedImages.map(handleFileMove));
  }

  const newPlace = new Place({ ...payload, images: updatedImages });

  try {
    const dbResult = await insertPlace(
      newPlace.title,
      newPlace.images,
      'newPlace.address',
      15.6,
      12.3
    );

    newPlace.id = dbResult.insertId.toString();
  } catch (err) {
    console.log(err);
    throw err;
  }

  return newPlace;
});

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPlace.fulfilled, (state, { payload }) => {
      state.places = state.places.concat(payload);
    });
  },
});

export const actions = { ...placesSlice.actions, addPlace };
export const reducer = placesSlice.reducer;
