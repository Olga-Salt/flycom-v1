import "react-native-gesture-handler";

import React, { useState } from "react";

import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { Provider } from "react-redux";

import { store } from "./redux/store";
import Main from "./components/Main";
import "./i18n";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main onLayoutRootView={onLayoutRootView} />
    </Provider>
  );
}
