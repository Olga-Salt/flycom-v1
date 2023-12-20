import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

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

  return <MainTabNavigator />;
};
