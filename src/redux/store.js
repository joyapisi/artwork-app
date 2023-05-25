import { configureStore } from '@reduxjs/toolkit';
import ArtworksReducer from './home/homeSlice';

const store = configureStore({
  reducer: {
    artworks: ArtworksReducer,
  },
});

export default store;
