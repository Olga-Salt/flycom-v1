import React, { useState } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isEnabled, setIsEnabled] = useState(i18n.language === "ru");

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    i18n.changeLanguage(isEnabled ? "ua" : "ru");
  };

  return (
    <View style={styles.container}>
      <Text>UA</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>RU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "flex-end",
    position: "absolute",
    right: 26,
    top: 46,
  },
});

export default LanguageToggle;
