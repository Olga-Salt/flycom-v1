import { createSlice } from "@reduxjs/toolkit";

const biometricSlice = createSlice({
  name: "biometric",
  initialState: "Выключено",
  reducers: {
    setBiometrics: (state, action) => action.payload,
  },
});

export const { setBiometrics } = biometricSlice.actions;

export default biometricSlice.reducer;
