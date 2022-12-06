import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import vaccineAPI from '../../apis/vaccine.api';

const initialState = {
  data: [],
  loading: false,
};

export const fetchVaccine = createAsyncThunk('getVaccine', async () => {
  try {
    const res = await vaccineAPI.getAllVaccine();
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
});

export const createVaccine = createAsyncThunk(
  'createVaccine',
  async (dataVaccine) => {
    try {
      const res = await vaccineAPI.addVaccine(dataVaccine);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
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
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(deleteVaccine.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteVaccine.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.data = state.data.filter((item) => item.id !== id);
        state.loading = false;
      });
  },
});

export default vaccineSlice.reducer;
