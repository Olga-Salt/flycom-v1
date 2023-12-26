import React from "react";
import { Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";

import {
  CalenderScreen,
  CreateScreen,
  EstimateScreen,
  MapScreen,
  MyTaskScreen,
  ProfileScreen,
} from "../Screens/mainScreen";
import LanguageToggle from "../helpers/langSwitcher";

const MainTab = createBottomTabNavigator();

// Компонент навигатора
const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Мои задачи"
      screenOptions={{
        tabBarActiveTintColor: COLORS.accentOrange,
        tabBarHideOnKeyboard: true,
        // headerRight: () => <LanguageToggle />,
        headerShown: false,
        // headerStatusBarHeight: 0,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 66 : 76,
          paddingTop: 8,
          paddingBottom: Platform.OS === "ios" ? 0 : 10,
          borderTopColor: "transparent",
          backgroundColor: "#fff",
          // paddingBottom: Platform.OS === "ios" ? 20 : 10,
          // paddingHorizontal: Platform.OS === "ios" ? 10 : null,
        },
      }}
    >
      <MainTab.Screen
        name="Календарь"
        component={CalenderScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/calendar.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? COLORS.accentOrange : null,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Карта"
        component={MapScreen}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/map.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? COLORS.accentOrange : null,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Мои задачи"
        component={MyTaskScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/ToDo.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? COLORS.accentOrange : null,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Смета"
        component={EstimateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/estimate.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? COLORS.accentOrange : null,
              }}
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
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/setings.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? COLORS.accentOrange : null,
              }}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
