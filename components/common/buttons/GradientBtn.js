import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles } from "../../../css/common";

const GradientBtn = ({ onPress, title, addStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        style={[commonStyles.btnWithGradient, addStyle]}
        activeOpacity={0.8}
        colors={["#75C7F1", "#384596"]}
        locations={[0, 1]}
        end={{ x: 0.1, y: 1 }}
      >
        <Text style={commonStyles.btnTitleGradient}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientBtn;
