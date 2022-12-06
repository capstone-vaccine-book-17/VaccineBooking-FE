import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminAPI from '../../apis/admin.api';

const initialState = {
  data: null,
  loading: false,
};

export const loginAdmin = createAsyncThunk('/auth/login', async (admin) => {
  try {
    const res = await adminAPI.login(admin);
    return res.data.data.token;
  } catch (err) {
    console.log(err);
  }
});

const adminSlice = createSlice({
  name: 'adminToken',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default adminSlice.reducer;
