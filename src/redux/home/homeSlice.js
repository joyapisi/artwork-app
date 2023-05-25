import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const url = 'https://api.artic.edu/api/v1/artworks';

export const fetchArtworks = createAsyncThunk('artworks/fetchArtworks', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return (error.message);
  }
});

const ArtworksSlice = createSlice({
  name: 'artworks',
  initialState: {
    artworks: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.artworks = action.payload;
        state.error = null;
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ArtworksSlice.reducer;
