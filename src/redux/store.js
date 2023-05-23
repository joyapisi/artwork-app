import { configureStore } from '@reduxjs/toolkit';
import ArtworksReducer from './home/homeSlice';

const store = configureStore({
  reducer: {
    Artworks: ArtworksReducer,

  },
});

export default store;
