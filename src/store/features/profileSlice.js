import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileAPI from "../../apis/profile.api";

const initialState = {
    data: [],
    error: null,
};

export const fetchProfile = createAsyncThunk("/v1/profile/", async () => {
    try {
        const res = await profileAPI.profile();
        console.log(res);
        return res;
    }   catch (err) {
        console.log(err);
    }
});

const profileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchProfile.fulfilled,(state, action) => {
            state.data = action.payload;
        })
    },
});


export default profileSlice.reducer;