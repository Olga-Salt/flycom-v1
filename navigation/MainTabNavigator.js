import React from "react";
import { Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTranslation } from "react-i18next";
import {
  CalenderScreen,
  CreateScreen,
  EstimateScreen,
  MapScreen,
  MyTaskScreen,
  ProfileScreen,
} from "../Screens/auth/mainScreen";
import LanguageToggle from "../helpers/langSwitcher";

const MainTab = createBottomTabNavigator();

// Компонент навигатора
const MainTabNavigator = () => {
  const { t } = useTranslation();

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#F8AB14",
        tabBarHideOnKeyboard: true,
        headerRight: () => <LanguageToggle />,
        headerStatusBarHeight: 0,
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
        name={t("calendar.title")}
        component={CalenderScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/calendar.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "#F8AB14" : null,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Карта"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/map.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "#F8AB14" : null,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={t("mytask.title")}
        component={MyTaskScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/ToDo.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "#F8AB14" : null,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={t("estimate.title")}
        component={EstimateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/estimate.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "#F8AB14" : null,
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
        name={t("settings.title")}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/image/setings.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "#F8AB14" : null,
              }}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
