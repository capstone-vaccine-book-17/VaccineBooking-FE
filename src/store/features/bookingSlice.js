import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingAPI from "../../apis/booking.api";

const initialState = {
  data: [],
  error: null,
};

export const createBooking = createAsyncThunk(
  "/v1/booking",
  async (dataBooking) => {
    try {
      const res = await bookingAPI.booking(dataBooking);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  extraReducers(builder) {
    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default bookingSlice.reducer;
