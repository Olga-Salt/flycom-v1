import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setDimensions,
  setIsShowKeyBoard,
} from "../../../redux/dashboard/sizesSlice";

export default function InputsWrapper({ children, onLayoutRootView }) {
  //   const dispatch = useDispatch();
  //   const dimensions = useSelector((state) => state.sizes.dimensions);
  //   const isShowKeyBoard = useSelector((state) => state.sizes.isShowKeyBoard);

  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [dimensions, setDimensions] = useState(width);

  function keyBoardHide() {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  }

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(
        window.width > window.height
          ? window.width - 200 * 2
          : window.width - 60 * 2
      );
    });

    return () => subscription?.remove();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onLayout={onLayoutRootView}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, justifyContent: "center" }}
        >
          <View
            style={{
              width: dimensions,
            }}
          >
            {children}
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
