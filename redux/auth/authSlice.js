// import { createSlice } from "@reduxjs/toolkit";
// import { apiSlice } from "../apiSlice";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { user: null, token: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       apiSlice.endpoints.login.matchFulfilled,
//       (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       }
//     );
//     builder.addMatcher(
//       apiSlice.endpoints.logout.matchFulfilled,
//       (state, action) => {
//         state.user = null;
//         state.token = null;
//       }
//     );
//   },
// });

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    nickName: null,
    stateChange: null,
    isAuth: false,
  },
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    setIsAuth: (state, { payload }) => ({
      ...state,
      isAuth: payload,
    }),
  },
});

export const { updateUserProfile, authStateChange, setIsAuth } =
  authSlice.actions;

export default authSlice.reducer;
