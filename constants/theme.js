const COLORS = {
  primary: "#384596",
  secondary: "#222",
  accentOrange: "#F8AB14",
  grayBlue: "#8389AE",

  gray: "#888",
  lightGray: "#999",

  white: "#fff",
};

const THEME = {
  light: {
    themeBackground: "#fff",
    themeGrayBackground: "#F4F5F6",
    themeText: "#384596",
    themeBlackwhite: "#222",
    activeColor: "#999",
  },
  dark: {
    themeBackground: "#1F1F1F",
    themeGrayBackground: "#313131",
    themeText: "#fff",
    themeBlackwhite: "#fff",
    activeColor: "#69696A",
  },
};

const FONT = {
  regular: "Inter-Regular",
  medium: "Inter-Medium",
  bold: "Inter-Bold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  location: {
    ios: {
      shadowColor: "#171717",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
    android: {
      elevation: 3,
      shadowColor: "#000",
    },
    default: {
      shadowColor: "#171717",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
  },
};

export { COLORS, FONT, SIZES, SHADOWS, THEME };
