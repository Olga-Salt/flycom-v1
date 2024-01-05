import { createSlice } from "@reduxjs/toolkit";
import { Dimensions } from "react-native";

const sizesSlice = createSlice({
  name: "sizes",
  initialState: {
    sizes: 12,
    isShowKeyBoard: false,
    dimensions: Dimensions.get("window").width - 60 * 2,
  },
  reducers: {
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setIsShowKeyBoard: (state, action) => {
      state.isShowKeyBoard = action.payload;
    },
    setDimensions: (state, action) => {
      state.dimensions = action.payload;
    },
  },
});

export const { setSizes, setIsShowKeyBoard, setDimensions } =
  sizesSlice.actions;

export default sizesSlice.reducer;
