import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

// Make a component
const Header = ({
  style,
  headText
}) => {
  return (
    <View style={style ? style : styles.mainViewStyle}>
      <Image 
        source={require("../../../../assets/images/cart.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.viewText}>{headText}</Text>
    </View>
  );
};

export { Header };
