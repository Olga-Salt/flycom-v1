import "react-native-gesture-handler";

import React, { useState } from "react";

import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useRuote } from "../router";

import { useLoginMutation } from "../redux/apiSlice";

export default function Main({ onLayoutRootView }) {
  const [isAuth, setIsAuth] = useState(false);
  const [login, { isLoading, error }] = useLoginMutation();

  //   const handleLoginSubmit = async (data) => {
  //     try {
  //       const { email, password } = data;
  //       console.log("email", email);
  //       console.log("password", password);

  //       const result = await login({ login: email, password: password });
  //       console.log("result", result);

  //       const response = await fetch("http://91.225.160.55:5000/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ login: email, password: password }),
  //       });

  //       if (response.ok) {
  //         const result = await response.json();
  //         console.log(result);
  //         result.access_granted === true ? setIsAuth(true) : false;
  //         // setIsAuth(true);
  //       } else {
  //         console.log("Ошибка при запросе: status", response.status);
  //       }
  //     } catch (error) {
  //       console.log("Ошибка error при запросе:", error);
  //     }
  //   };

  const handleLoginSubmit = async (data) => {
    try {
      const { email, password } = data;
      console.log("email", email);
      console.log("password", password);

      const result = await login({ login: email, password: password });
      console.log("result", result);

      if (result.data.access_granted) {
        setIsAuth(true);
      } else {
        console.log("Ошибка при запросе: status", result.error);
      }
    } catch (error) {
      console.log("Ошибка error при запросе:", error);
    }
  };

  const routing = useRuote(
    {},
    // isAuth,
    onLayoutRootView,
    handleLoginSubmit
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {routing}
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
