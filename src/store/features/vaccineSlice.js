import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import vaccineAPI from '../../apis/vaccine.api';

const initialState = {
  data: [],
  loading: false,
};

export const fetchVaccine = createAsyncThunk('getVaccine', async () => {
  try {
    const res = await vaccineAPI.getAllVaccine();
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const createVaccine = createAsyncThunk(
  'createVaccine',
  async (dataVaccine) => {
    try {
      const res = await vaccineAPI
        .addVaccine(dataVaccine)
        .then(
          (res) =>
            res.data.code === 200 && toast.success('Tambah vaksin berhasil!')
        );
      return res.data;
    } catch (err) {
      console.log(err);
      toast.warn('Tambah vaksin gagal!');
    }
  }
);

export const deleteVaccine = createAsyncThunk('deleteVaccine', async (id) => {
  try {
    const res = await vaccineAPI.deleteVaccine(id);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
});

export const updateVaccine = createAsyncThunk(
  'updateVaccine',
  async (dataEdited) => {
    try {
      const res = await vaccineAPI.updateVaccine(dataEdited);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

const vaccineSlice = createSlice({
  name: 'vaccine',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchVaccine.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVaccine.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(createVaccine.pending, (state) => {
        state.loading = true;
      })
      .addCase(createVaccine.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(deleteVaccine.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteVaccine.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.data = state.data.filter((item) => item.id !== id);
        state.loading = false;
      })
      .addCase(updateVaccine.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVaccine.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = state.data.map((vaccine) => {
          if (vaccine.vaccine_id === state.data.id) {
            return {
              ...vaccine,
              name: action.payload.name,
              kuota: action.payload.kuota,
              expired: action.payload.expired,
            };
          } else {
            return vaccine;
          }
        });
        state.loading = false;
      });
  },
});

export default vaccineSlice.reducer;
