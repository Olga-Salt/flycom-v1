import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import React from "react";

import MyTaskScreen from "./Screens/auth/mainScreen/MyTaskScreen";
import CreateScreen from "./Screens/auth/mainScreen/CreateScreen";
import MapScreen from "./Screens/auth/mainScreen/MapScreen";
import ProfileScreen from "./Screens/auth/mainScreen/ProfileScreen";
import { LoginScreen } from "./Screens/auth";

import { Image } from "react-native";

const MainTab = createBottomTabNavigator();
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
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#006adc",
        tabBarStyle: {
          height: 76,
          paddingBottom: Platform.OS === "ios" ? 20 : 10,
          borderTopColor: "transparent",
          backgroundColor: "#fff",
        },
      }}
    >
      <MainTab.Screen
        name="Мои задачи"
        component={MyTaskScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/ToDo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Календарь"
        component={MyTaskScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/calendar.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Карта"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/map.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      {/* <MainTab.Screen
        name="Карта"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/map.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      /> */}
      <MainTab.Screen
        name="Настройки"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/setings.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
