import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const url = 'https://api.artic.edu/api/v1/artworks';

const initialState = {
  artworks: [],
  isLoading: false,
  error: null,
};

export const fetchArtworks = createAsyncThunk('artworks/fetchArtworks', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    // return data.map((artwork) => ({
    //   id: artwork.id,
    //   title: artwork.title,
    //   artist_display: artwork.artist_display,
    //   date: artwork.date_display,
    //   image: artwork.images[0],
    // }));
  } catch (error) {
    return (error.message);
  }
  // const response = axios.fetch(url);
  // const test = (await response).data;
  // return test.data;
});

const ArtworksSlice = createSlice({
  name: 'artworks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Artworks = action.payload;
        state.error = null;
      })
      .addCase(fetchArtworks, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ArtworksSlice.reducer;
