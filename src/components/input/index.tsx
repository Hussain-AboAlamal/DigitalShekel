import React from "react";
import { StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";
import { InputProps } from "./InputProps";

import Styles from '../../../src/styles';

const Input = ({label, value, onChangeText, ...rest}: InputProps): React.JSX.Element => {
    return <TextInput
      style={styles.container}
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
}

const styles = StyleSheet.create({
  container: {
      marginVertical: Styles.Margin.vertical,
  }
});

export default Input;
