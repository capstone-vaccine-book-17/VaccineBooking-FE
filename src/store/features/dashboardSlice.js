import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dashboardAPI from "../../apis/dashboard.api";

const initialState = {
  data: [],
  error: false,
};

export const fetchDashboard = createAsyncThunk("dashboard", async () => {
  try {
    const res = await dashboardAPI.getDashboards();
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.data = action.payload;
        state.pending = true;
      });
  },
});

export default dashboardSlice.reducer;
