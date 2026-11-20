import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';


export const fetchSongs = createAsyncThunk('search/fetchSongs', async () => {

  const songsResponse = await api.get(`/songs/`);

  return songsResponse.data;
  
});

const songSlice = createSlice({
  name: 'search',
  initialState: {
    items: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSongs.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchSongs.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "succeeded";
      state.items = action.payload;
    })
    .addCase(fetchSongs.rejected, (state) => {
      state.loading = false;
      state.status = "failed";
      state.error = "No fue posible buscar las canciones.";
    });
  }
});



export default songSlice.reducer;