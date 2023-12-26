import { StyleSheet, Platform } from "react-native";
import { SHADOWS, SIZES, COLORS, FONT } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "flex-end",
  // },
  screenTitle: {
    fontSize: 18,
    textAlign: "center",
    color: COLORS.primary,
    fontFamily: FONT.regular,
    marginTop: SIZES.xxLarge,
  },

  imageSvg: {
    alignItems: "center",
  },

  formWrapper: {
    backgroundColor: COLORS.white,
    alignItems: "center",
  },

  form: {
    // paddingBottom: 78,
    // paddingTop: 92,
    // paddingTop: 180,
  },

  input: {
    borderColor: COLORS.primary,
    borderWidth: 0.5,
    height: SIZES.xxLarge,
    paddingLeft: SIZES.xLarge,
    borderRadius: 5,
    marginTop: SIZES.medium,
    fontSize: 14,
    fontFamily: FONT.regular,
  },
  inputWrapper: {
    marginTop: SIZES.medium,
  },

  btnWithGradient: {
    borderRadius: 20,
    marginTop: SIZES.xxLarge,
    paddingBottom: SIZES.small,
    paddingTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.xxLarge,
  },

  btn: {
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 43,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.medium,
  },

  btnIsSignIn: {
    color: "#1B4371",
    textAlign: "center",
    marginTop: SIZES.medium,
  },
  btnTitleGradient: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  showPassTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: "#1B4371",
    position: "absolute",
    right: SIZES.medium,
    top: 9,
    paddingVertical: SIZES.medium,
  },
});
