import { StyleSheet, Platform } from "react-native";
import { SIZES, COLORS, FONT } from "../constants";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 16,
    paddingHorizontal: SIZES.medium,
    borderTopWidth: 0.2,
    borderColor: COLORS.gray,
  },

  centeredContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
  },

  rowContainer: {
    // paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  screenTitles: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.primary,
    fontFamily: FONT.regular,
    // marginTop: SIZES.xxLarge,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },

  btnWithGradient: {
    borderRadius: 20,
    marginTop: SIZES.xxLarge,
    paddingBottom: SIZES.small,
    paddingTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: SIZES.xxLarge,
  },

  btnTitleGradient: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
});
