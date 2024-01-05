import React from "react";
import { View, Text, TextInput } from "react-native";
// import { Calendar } from "react-native-calendars";

import { StatusBar, setStatusBarStyle } from "expo-status-bar";
// import { StatusBar } from "react-native";

import { Container } from "../../components/common/containers";
import { UserName } from "../../components/common/userInfo";

const EstimateScreen = () => {
  // StatusBar.setStyle("light");
  // StatusBar.setStatusBarStyle;
  // console.log("StatusBar", StatusBar.setBarStyle("dark", true));
  // console.log("StatusBar", setStatusBarStyle("dark", true));
  // setStatusBarStyle("light", true);
  return (
    <Container>
      <UserName />
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }} />
    </Container>
  );
};

export default EstimateScreen;
