import { View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { commonStyles } from "../../../css/common";
import { THEME } from "../../../constants";

const Container = ({ children }) => {
  const prevTheme = useSelector((state) => state.theme);
  let activeTheme = THEME[prevTheme];

  return (
    <View
      style={{
        ...commonStyles.container,
        backgroundColor: activeTheme.themeBackground,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
