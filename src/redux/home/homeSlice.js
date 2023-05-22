import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.artic.edu/api/v1/artworks';

const initialState = {
  Artworks: [],
  isLoading: false,
  error: null,
};

export const getArtworks = createAsyncThunk('Artworks/getArtworks', async () => {
  const response = axios.get(url);
  const test = (await response).data;
  return test.data;
});

const currencySlice = createSlice({
  name: 'Artworks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArtworks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArtworks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Artworks = action.payload;
        state.error = null;
      })
      .addCase(getArtworks, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default currencySlice.reducer;