import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainViewStyle: {
    height: 60,
    justifyContent: "center", // It is used to adjust Items in Vertical Directions i.e Downwards Direction
    alignItems: "center", // It is used to adjust Items in Horizontal Directions i.e Sideways Direction
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: "relative"
  },
  viewText: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#007aff"
  }
});
