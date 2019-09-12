import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  return (
    <View style={styles.contatinerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInputStyle}
      />
    </View>
  );
};

export { Input };
