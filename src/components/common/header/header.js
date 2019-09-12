// Import libraries for making a component
import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

// Make a component
const Header = ({
  style,
  headText
}) => {
  return (
    <View style={style ? style : styles.mainViewStyle}>
      <Text style={styles.viewText}>{headText}</Text>
    </View>
  );
};

// Make the component available for the other parts of App
export { Header };
