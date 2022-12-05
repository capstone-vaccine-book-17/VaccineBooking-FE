import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminAPI from "../../apis/admin.api";

const initialState = {
  data: null,
  error: null,
};

export const loginAdmin = createAsyncThunk("/auth/login", async (admin) => {
  try {
    const res = await adminAPI.login(admin);
    return res.data.data.token;
  } catch (err) {
    console.log(err);
  }
});

const adminSlice = createSlice({
  name: "adminToken",
  initialState,
  extraReducers(builder) {
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default adminSlice.reducer;
