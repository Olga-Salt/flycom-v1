import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
  name: "route",
  initialState: "Profile",
  reducers: {
    setRoute: (state, action) => action.payload,
  },
});

export const { setRoute } = routeSlice.actions;

export default routeSlice.reducer;
