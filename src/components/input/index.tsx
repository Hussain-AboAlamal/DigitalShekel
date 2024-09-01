import React from "react";
import { TextInput } from "react-native-paper";
import { InputProps } from "./InputProps";

const Input = ({label, value, onChangeText}: InputProps): React.JSX.Element => {
    return <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
}

export default Input;
