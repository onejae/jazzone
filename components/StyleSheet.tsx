import { StyleSheet } from "react-native";

export default StyleSheet.create({
  checkBox: {
    color: "#123456",
  },
  smallSwitch: {
    marginLeft: -5,
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
    trackColor: { false: "#767577", true: "#81b0ff" },
    thumbColor: { true: "#f5dd4b", false: "#f4f3f4" },
    ios_backgroundColor: "#3e3e3e",
  },
});
