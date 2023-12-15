import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SimpleLineIcons } from "react-native-vector-icons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.userInfoWrap}>
          <View>
            <Image
              style={styles.userAvatar}
              source={require("../../../assets/image/user.png")}
            />
          </View>
          <View>
            <Text style={styles.userName}>Иванов Иван Иванович</Text>
            <Text style={styles.userDetails}>Специалист ТС Одесса</Text>
          </View>
        </View>
        <View style={styles.notificationBell}>
          <SimpleLineIcons name="bell" size={24} color="black" />
          <View style={styles.notificationDot}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingHorizontal: 16,
    borderTopWidth: 0.2,
    borderColor: "#888",
  },
  userInfoWrap: {
    flexDirection: "row",
  },
  userName: {
    fontSize: 14,
    fontWeight: "regular",
  },
  userDetails: {
    fontSize: 8,
    color: "#999",
  },
  userAvatar: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
  notificationDot: {
    position: "absolute",
    top: -2,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
});

export default ProfileScreen;
