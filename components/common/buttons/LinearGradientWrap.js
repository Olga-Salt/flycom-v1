import { View, Text } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";

const LinearGradientWrap = ({ children, addStyle }) => {
  return (
    <LinearGradient
      style={[addStyle]}
      activeOpacity={0.8}
      colors={["#75C7F1", "#384596"]}
      locations={[0, 1]}
      end={{ x: 0.1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default LinearGradientWrap;
