import { Platform } from "react-native";

const theme = {
  colors: {
    backgroundPrimary: "#e1e4e8",
    backgroundSecondary: "white",
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    light: "white",
    dark: "black",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: Platform.select({
    android: "Roboto",
    ios: "Arial",
    default: "System",
  }),
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
