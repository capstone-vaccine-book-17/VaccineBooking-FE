import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import sessionAPI from '../../apis/session.api';

const initialState = {
  data: [],
  loading: false,
};

export const fetchSession = createAsyncThunk('fetchSession', async () => {
  try {
    const res = await sessionAPI.getAllSession();
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const createSession = createAsyncThunk(
  'createSession',
  async (dataSession) => {
    try {
      const res = await sessionAPI
        .addSession(dataSession)
        .then((res) =>
          res.data.code === 200
            ? toast.success('Tambah vaksin berhasil!')
            : toast.warn('Tambah vaksin gagal!')
        );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

const adminSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSession.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = true;
      })
      .addCase(createSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.data.push({ ...action.payload });
        state.loading = true;
      });
  },
});

export default adminSlice.reducer;
