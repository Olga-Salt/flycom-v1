import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useRuote } from "../router";

import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/dashboard/languageSlice";
import { setMaps } from "../redux/dashboard/mapSlice";
import { setThemes } from "../redux/dashboard/themeSlice";
import { setBiometrics } from "../redux/dashboard/biometricSlise";
import { useTranslation } from "react-i18next";
import { THEME } from "../constants";

export default function Main({ onLayoutRootView }) {
  const prevTheme = useSelector((state) => state.theme);
  let activeTheme = THEME[prevTheme];

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const { i18n } = useTranslation();

  useEffect(() => {
    const loadUserStorage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      const savedMap = await AsyncStorage.getItem("map");
      const savedTheme = await AsyncStorage.getItem("theme");
      const savedBiometric = await AsyncStorage.getItem("biometric");

      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
        dispatch(setLanguage(savedLanguage));
      }

      if (savedMap) {
        dispatch(setMaps(savedMap));
      }

      if (savedTheme) {
        dispatch(setThemes(savedTheme));
      }

      if (savedBiometric) {
        dispatch(setBiometrics(savedBiometric));
      }
    };

    loadUserStorage();
  }, [dispatch]);

  const routing = useRuote(
    // {},
    isAuth,
    onLayoutRootView
  );

  return (
    <SafeAreaProvider style={{ backgroundColor: activeTheme.themeBackground }}>
      <NavigationContainer>
        {routing}
        <StatusBar style={prevTheme === "light" ? "dark" : "light"} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
