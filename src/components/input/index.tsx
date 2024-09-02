import React from "react";
import { StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";
import { Props as ElementProps } from "react-native-paper/src/components/TextInput/TextInput"

import Styles from '../../../src/styles';

export type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

const Input = (props: ElementProps): React.JSX.Element => {
    return <TextInput
      style={styles.container}
      mode="outlined"
      {...props}
    />
}

const styles = StyleSheet.create({
  container: {
      marginVertical: Styles.Margin.vertical,
  }
});

export default Input;
