import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGuide } from '../../api';

export const fetchGuide = createAsyncThunk ("guide/fetchGuide", async() => {
  const guidesResponse = await apiGuide.get ("/monitoring/")
  return guidesResponse.data;
});

export const createGuide = createAsyncThunk ("guide/createGuide", async(trackingNumber) => {
  const guidesResponse = await apiGuide.post ("/monitoring/", {trackingNumber})
  return guidesResponse.data
});

export const updateGuide = createAsyncThunk ("guide/updateGuide", async({guideId, currentStatus}) => {
  const guidesResponse = await apiGuide.patch (`/monitoring/${guideId}/`, {currentStatus})
  return guidesResponse.data
}); 


const guideSlice = createSlice({
  name: "guide",
  initialState: {
    currentGuide: {
      trackingNumber: "",
      currentStatus: "",
      createdAt: "",
    },
    guides: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchGuide.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchGuide.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.guides = action.payload;
    })
    .addCase(fetchGuide.rejected, (state) => {
      state.status = "failed";
      state.error = "No fue posible buscar las guias.";
    })
    .addCase(createGuide.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(createGuide.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.guides.push(action.payload);
    })
    .addCase(createGuide.rejected, (state) => {
      state.status = "failed";
      state.error = "No fue posible crear la guía.";
    })
    .addCase(updateGuide.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(updateGuide.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.currentGuide = action.payload
      state.guides = state.guides.map((guide) => guide.id === action.payload.id ? action.payload : guide)
    })
    .addCase(updateGuide.rejected, (state) => {
      state.status = "failed";
      state.error = "No fue posible actualizar la guía.";
    })
  }
});

export default guideSlice.reducer;