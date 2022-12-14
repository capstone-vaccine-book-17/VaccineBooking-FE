import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import sessionAPI from '../../apis/session.api';

const initialState = {
  data: [],
  dataID: [],
  loading: false,
};

export const fetchSession = createAsyncThunk('fetchSession', async () => {
  try {
    const res = await sessionAPI.getAllSession();
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const createSession = createAsyncThunk(
  'createSession',
  async (dataSession) => {
    try {
      const res = await sessionAPI.addSession(dataSession);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getSessionByID = createAsyncThunk('sessionID', async (id) => {
  try {
    const res = await sessionAPI.getSessionByID(id);
    console.log(res.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteSession = createAsyncThunk('deleteSession', async (id) => {
  try {
    const res = await sessionAPI.deleteSession(id);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
});

export const updateSession = createAsyncThunk(
  'updateSession',
  async (dataEdited) => {
    try {
      const res = await sessionAPI
        .updateSession(dataEdited)
        .then(
          (res) => res.data.code === 200 && toast.success('Edit sesi berhasil!')
        );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      toast.warn('Edit sesi gagal!');
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
      .addCase(getSessionByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSessionByID.fulfilled, (state, action) => {
        state.dataID = action.payload;
        state.loading = false;
      })
      .addCase(createSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = true;
      })
      .addCase(deleteSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSession.fulfilled, (state, action) => {
        // const { id } = action.payload;
        // state.data = state.data.filter((item) => item.id !== id);
        state.loading = false;
      })
      .addCase(updateSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSession.fulfilled, (state, action) => {
        state.data = state.data.map((session) => {
          if (session.session_id === state.data.id) {
            return {
              ...session,
              name: action.payload.name,
              vaccine_id: action.payload.vaccine_id,
              startTime: action.payload.startTime,
              kuota: action.payload.kuota,
              dosis: action.payload.dosis,
              endTime: action.payload.endTime,
            };
          } else {
            return session;
          }
        });
        state.loading = false;
      });
  },
});

export default adminSlice.reducer;
