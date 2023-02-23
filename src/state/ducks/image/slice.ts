import {ReducerType} from '@image-loc/state/storeConfig/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageLocation, initialState} from './types';

export const imageSlice = createSlice({
  name: ReducerType.Image,
  initialState,
  reducers: {
    setImageUri: {
      prepare: (uri: string) => ({payload: {uri}}),
      reducer: (state, {payload: {uri}}: PayloadAction<{uri: string}>) => {
        return {...state, uri: uri};
      },
    },
    setImageLocation: {
      prepare: (location?: ImageLocation) => ({payload: {location}}),
      reducer: (
        state,
        {payload: {location}}: PayloadAction<{location?: ImageLocation}>,
      ) => {
        return {...state, location: location};
      },
    },
  },
});

export default imageSlice.reducer;
