import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { SimpleLineIcons } from "react-native-vector-icons";

import { commonStyles } from "../../../css/common";
import { styles } from "../../../Screens/mainScreen/styles";
import { THEME } from "../../../constants";

const UserName = ({ children }) => {
  const prevTheme = useSelector((state) => state.theme);
  let activeTheme = THEME[prevTheme];
  const { userId, nickName } = useSelector((state) => state.auth);

  return (
    <View style={{ ...commonStyles.rowContainer, marginBottom: 28 }}>
      <View style={styles.userInfoWrap}>
        <View>
          <Image
            style={styles.userAvatar}
            source={require("../../../assets/image/user.png")}
          />
        </View>
        <View>
          <Text style={{ ...styles.userName, color: activeTheme.themeText }}>
            {userId}
          </Text>
          <Text style={styles.userDetails}>Специалист ТС Одесса</Text>
        </View>
      </View>

      {children}
    </View>
  );
};

export default UserName;
