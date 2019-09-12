import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export { Button };

// We can also write this onPress like below code since we are passing a props from parent Component.
// So by destructuring the code we can also write:

// const Button = ({ onPress, children }) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
//       <Text style={styles.textStyle}>{children}</Text>
//     </TouchableOpacity>
//   );
// };
