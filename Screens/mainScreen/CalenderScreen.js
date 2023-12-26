import React from "react";
import { View, Text } from "react-native";
// import { Calendar } from "react-native-calendars";
import { BASE_URL } from "@env";

const baseUrl = BASE_URL;

const CalenderScreen = () => {
  return (
    <View>
      <Text>CalenderScreen</Text>
      <Text>{baseUrl}</Text>
    </View>
  );
};

export default CalenderScreen;
