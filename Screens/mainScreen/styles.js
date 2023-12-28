import { StyleSheet, Platform } from "react-native";
import { SHADOWS, SIZES, COLORS, FONT } from "../../constants";

export const styles = StyleSheet.create({
  userInfoWrap: {
    flexDirection: "row",
  },
  userName: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  userDetails: {
    fontSize: 8,
    color: COLORS.grayBlue,
  },
  userAvatar: {
    marginRight: 8,
    height: SIZES.xxLarge,
    width: SIZES.xxLarge,
  },
  settingsIcons: {
    marginRight: 8,
    height: SIZES.xLarge,
    width: SIZES.xLarge,
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

  dropdown: {
    height: 24,
    width: 90,
    paddingLeft: 8,
    paddingRight: 2,
  },

  label: {
    // width: 160,
    height: 24,
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },

  item: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 10,
  },
  placeholderStyle: {
    fontSize: 10,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  selectedTextStyle: {
    fontSize: 10,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  iconStyle: {
    width: 18,
    height: 18,
  },

  containerStyle: {
    borderRadius: 5,
    overflow: "hidden",
  },

  btnLocation: {
    position: "absolute",
    right: SIZES.medium,
    bottom: 30,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ...SHADOWS.location,
    }),
  },

  btnWithGradient: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredBtnWrapper: {
    flex: 2,
    justifyContent: "center",
  },
});
