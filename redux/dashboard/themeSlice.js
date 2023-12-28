import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    setThemes: (state, action) => action.payload,
  },
});

export const { setThemes } = themeSlice.actions;

export default themeSlice.reducer;
