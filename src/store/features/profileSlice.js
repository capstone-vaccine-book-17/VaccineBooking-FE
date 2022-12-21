import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import profileAPI from '../../apis/profile.api';

const initialState = {
  data: [],
  loading: false,
};

export const fetchProfile = createAsyncThunk('getProfile', async () => {
  try {
    const res = await profileAPI.getProfile();
    return res.data.data[0];
  } catch (err) {
    console.log(err);
  }
});

export const updateProfile = createAsyncThunk(
  'updateProfile',
  async (profileEdited) => {
    try {
      const res = await profileAPI.updateProfile(profileEdited);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export default profileSlice.reducer;
