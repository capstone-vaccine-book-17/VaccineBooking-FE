import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookingAPI from '../../apis/booking.api';

const initialState = {
  data: [],
  loading: false,
};

export const fetchBooking = createAsyncThunk('/v1/booking/', async () => {
  try {
    const res = await bookingAPI.getBooking();
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
});

export const createBooking = createAsyncThunk(
  '/v1/booking',
  async (dataBooking) => {
    try {
      const res = await bookingAPI.createBooking(dataBooking);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// export const deleteBooking = createAsyncThunk("", async (id) => {
//   try {
//     const res = await bookingAPI.deleteBooking(id);
//     console.log(res);
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// });

// export const updateBooking = createAsyncThunk(
//   "/v1/profile/update",
//   async (id) => {
//     try {
//       const res = await bookingAPI.updateBooking(id);
//       console.log(res);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        // })
        // .addCase(deleteBooking.fulfilled, (state, action) => {
        //   state.data = state.data.filter((x) => x !== action.payload.id);
        // })
        // .addCase(updateBooking.fulfilled, (state, action) => {
        //   state.data = state.data.map((x) => {
        // } if () {
        //   return { ..., isDone: !.isDone};
        // } else {
        //   return ;
        // });
      });
  },
});

export default bookingSlice.reducer;
