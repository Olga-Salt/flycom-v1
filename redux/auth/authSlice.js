import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.logout.matchFulfilled,
      (state, action) => {
        state.user = null;
        state.token = null;
      }
    );
  },
});

export default authSlice.reducer;
