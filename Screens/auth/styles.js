import { StyleSheet, Platform } from "react-native";

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
    color: "#212121",
    fontFamily: "Inter-Regular",
    marginTop: 32,
  },

  imageSvg: {
    alignItems: "center",
  },

  formWrapper: {
    backgroundColor: "#fff",
    alignItems: "center",
  },

  form: {
    // paddingBottom: 78,
    // paddingTop: 92,
    // paddingTop: 180,
  },

  // shadowProp: {
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: "#171717",
  //       shadowOffset: { width: 0, height: 3 },
  //       shadowOpacity: 0.4,
  //       shadowRadius: 2,
  //     },
  //     android: {
  //       elevation: 3,
  //       shadowColor: "#000",
  //     },
  //     default: {
  //       shadowColor: "#171717",
  //       shadowOffset: { width: 0, height: 3 },
  //       shadowOpacity: 0.4,
  //       shadowRadius: 2,
  //     },
  //   }),
  // },

  input: {
    borderColor: "#E8E8E8",
    borderWidth: 1,
    height: 32,
    paddingLeft: 24,
    borderRadius: 8,
    marginTop: 16,
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  inputWrapper: {
    marginTop: 16,
    // marginHorizontal: 40,
  },

  btnWithGradient: {
    borderRadius: 8,
    marginTop: 32,
    paddingBottom: 12,
    paddingTop: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 32,

    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "#fff",
    //     borderColor: "#FF6C00",
    //   },
    //   android: {
    //     backgroundColor: "#fff",
    //     borderColor: "#FF6C00",
    //   },
    //   default: {
    //     backgroundColor: "#fff",
    //     borderColor: "#FF6C00",
    //   },
    // }),
  },

  btn: {
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 43,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,

    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "#FF6C00",
    //     borderColor: "#FF6C00",
    //   },
    //   android: {
    //     backgroundColor: "#FF6C00",
    //     borderColor: "#FF6C00",
    //   },
    //   default: {
    //     backgroundColor: "#FF6C00",
    //     borderColor: "#FF6C00",
    //   },
    // }),
  },
  btnIsSignIn: {
    color: "#1B4371",
    textAlign: "center",
    marginTop: 16,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
  },
  showPassTitle: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    color: "#1B4371",
    position: "absolute",
    right: 16,
    top: 9,
    paddingVertical: 15,
  },
});
