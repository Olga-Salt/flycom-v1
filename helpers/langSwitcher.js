import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { LinearGradient } from "expo-linear-gradient";
import { Switch } from "react-native-switch";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/dashboard/languageSlice";

function LanguageToggle() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(i18n.language === "ru");

  const toggleSwitch = async () => {
    const newLanguage = isEnabled ? "ua" : "ru";
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
    await AsyncStorage.setItem("language", newLanguage);
    setIsEnabled(!isEnabled);
  };

  return (
    <View style={styles.container}>
      <Text>UA</Text>
      <LinearGradient
        style={{
          borderRadius: 20,
          padding: 2,
          marginHorizontal: 8,
          borderWidth: 1,
          borderColor: "#fff",
          overflow: "hidden",
          width: 32,
          height: 18,
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.8}
        colors={isEnabled ? ["#75C7F1", "#384596"] : ["#767577", "#767577"]}
        locations={[0, 1]}
        end={{ x: 0.1, y: 1 }}
      >
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          disabled={false}
          circleSize={12}
          barHeight={18}
          circleBorderWidth={0}
          backgroundActive={"transparent"}
          backgroundInactive={"transparent"}
          circleActiveColor={"#fff"}
          circleInActiveColor={"#fff"}
          changeValueImmediately={true}
          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
          outerCircleStyle={{}}
          renderActiveText={false}
          renderInActiveText={false}
          switchLeftPx={1.8}
          switchRightPx={1.8}
          switchWidthMultiplier={2}
        />
      </LinearGradient>
      <Text>ru</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 16,
    top: 46,
  },
});

export default LanguageToggle;
