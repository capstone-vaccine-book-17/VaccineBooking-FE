import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sessionAPI from "../../apis/session.api";

const initialState = {
  data: null,
  error: null,
};

export const fetchSession = createAsyncThunk("/v1/session", async () => {
  try {
    const res = await sessionAPI.getAllSession();
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
});

const adminSlice = createSlice({
  name: "session",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default adminSlice.reducer;
