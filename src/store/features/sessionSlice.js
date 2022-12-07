import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sessionAPI from '../../apis/session.api';

const initialState = {
  data: [],
  error: false,
};

export const fetchSession = createAsyncThunk('/v1/session', async () => {
  try {
    const res = await sessionAPI.getAllSession();
    console.log(res.data.data);
    return res;
  } catch (err) {
    console.log(err);
  }
});

const adminSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchSession.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchSession.fulfilled, (state, action) => {
        state.data = action.payload;
        state.pending = true;
      });
  },
});

export default adminSlice.reducer;
