import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { LoginScreen } from "./Screens/auth";
import MainTabNavigator from "./navigation/MainTabNavigator";

const authStack = createStackNavigator();

export const useRuote = (isAuth, onLayoutRootView, handleLoginSubmit) => {
  if (!isAuth) {
    return (
      <authStack.Navigator>
        <authStack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <LoginScreen
              {...props}
              onLayoutRootView={onLayoutRootView}
              handleLoginSubmit={handleLoginSubmit}
            />
          )}
        </authStack.Screen>
      </authStack.Navigator>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainTabNavigator />
    </SafeAreaView>
  );
};
