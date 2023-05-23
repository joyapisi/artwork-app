import { configureStore } from '@reduxjs/toolkit';
import ArtworksReducer from './home/homeSlice';

const store = configureStore({
  reducer: {
    artworks: ArtworksReducer,
    // ...other reducers if you have them
  },
});

export default store;
