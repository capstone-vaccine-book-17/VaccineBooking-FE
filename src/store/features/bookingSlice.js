import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookingAPI from '../../apis/booking.api';
import { toast } from 'react-toastify';

const initialState = {
  data: [],
  dataID: [],
  loading: false,
};

export const fetchBooking = createAsyncThunk('getBooking', async () => {
  try {
    const res = await bookingAPI.getBooking();
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const getBookingByID = createAsyncThunk('bookingID', async (id) => {
  try {
    const res = await bookingAPI.getBookingByID(id);
    console.log(res.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const createBooking = createAsyncThunk(
  'addBooking',
  async (dataBooking) => {
    try {
      const res = await bookingAPI.createBooking(dataBooking);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteBooking = createAsyncThunk('deleteBooking', async (id) => {
  try {
    const res = await bookingAPI.deleteBooking(id);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
});

export const updateBooking = createAsyncThunk(
  'updateBooking',
  async (dataEdited) => {
    try {
      const res = await bookingAPI
        .updateBooking(dataEdited)
        .then(
          (res) =>
            res.data.code === 200 && toast.success('Edit Booking berhasil!')
        );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      toast.warn('Edit booking gagal!');
    }
  }
);

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
      .addCase(getBookingByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookingByID.fulfilled, (state, action) => {
        state.dataID = action.payload;
        state.loading = false;
      })
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        const bookingId = action.meta.arg;
        const updatedData = state.data.filter(
          (item) => item.booking_id !== bookingId
        );
        state.data = updatedData;
        state.loading = false;
      })
      .addCase(updateBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = state.data.map((booking) => {
          if (booking.booking_id === state.dataID.id) {
            return { ...booking, status: action.payload.status };
          } else {
            return booking;
          }
        });
        state.loading = false;
      });
  },
});

export default bookingSlice.reducer;
