import "react-native-gesture-handler";

import React, { useState } from "react";

import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// import { useRuote } from "./router";
import { store } from "./redux/store";
import Main from "./components/Main";
import "./i18n";

// import { useLoginMutation } from "./redux/apiSlice";
// import apiSlice from "./redux/apiSlice";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Midium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  // const [isAuth, setIsAuth] = useState(false);
  // const [login, { isLoading, error }] = useLoginMutation();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // const handleLoginSubmit = async (data) => {
  //   try {
  //     const { email, password } = data;
  //     console.log("email", email);
  //     console.log("password", password);

  //     const result = await login({ login: email, password: password });

  //     const response = await fetch("http://91.225.160.55:5000/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ login: email, password: password }),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log(result);
  //       result.access_granted === true ? setIsAuth(true) : false;
  //       // setIsAuth(true);
  //     } else {
  //       console.log("Ошибка при запросе: status", response.status);
  //     }
  //   } catch (error) {
  //     console.log("Ошибка error при запросе:", error);
  //   }
  // };

  // const handleLoginSubmit = async (data) => {
  //   try {
  //     const { email, password } = data;
  //     console.log("email", email);
  //     console.log("password", password);

  //     const resultAction = await login({ login: email, password: password });

  //     if (apiSlice.endpoints.login.matchFulfilled(resultAction)) {
  //       const result = resultAction.payload;
  //       console.log(result);
  //       result.access_granted === true ? setIsAuth(true) : false;
  //     } else {
  //       console.log("Ошибка при запросе: status", resultAction.error);
  //     }
  //   } catch (error) {
  //     console.log("Ошибка error при запросе:", error);
  //   }
  // };

  // const routing = useRuote(
  //   // {},
  //   isAuth,
  //   onLayoutRootView,
  //   handleLoginSubmit
  // );

  return (
    <Provider store={store}>
      {/* <SafeAreaProvider>
        <NavigationContainer>
          {routing}
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider> */}
      <Main onLayoutRootView={onLayoutRootView} />
    </Provider>
  );
}
