import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./apiSlice";
import authSlice from "./auth/authSlice";
import languageSlice from "./dashboard/languageSlice";
import routeSlice from "./dashboard/routeSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice,
  language: languageSlice,
  route: routeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
