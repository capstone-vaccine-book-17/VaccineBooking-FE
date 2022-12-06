import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import vaccineAPI from "../../apis/vaccine.api";

const initialState = {
    data: [],
    error: null,
};

export const fetchVaccine = createAsyncThunk("/v1/vaccine/view", async () => {
    try {
        const res = await vaccineAPI.getAllVaccine();
        console.log(res);
        return res;
    }   catch (err) {
        console.log(err);
    }
});

export const createVaccine = createAsyncThunk("getVaccine",
    async (dataVaccine) => {
      try {
        const res = await vaccineAPI.addVaccine(dataVaccine);
        console.log(res);
        return res;
      } catch (err) {
        console.log(err);
      }
    });

const vaccineSlice = createSlice({
    name: "vaccine",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchVaccine.fulfilled,(state, action) => {
            state.data = action.payload;
        })
        .addCase(createVaccine.fulfilled,(state, action) => {
            state.data.push(action.payload);
        });
    },
});

export default vaccineSlice.reducer;