import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState: "Visicom",
  reducers: {
    setMaps: (state, action) => action.payload,
  },
});

export const { setMaps } = mapSlice.actions;

export default mapSlice.reducer;
