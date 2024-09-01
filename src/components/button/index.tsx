import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";

import { Button as PaperButton } from "react-native-paper";

import Styles from '../../../src/styles';

export type ElementProps = {
    mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
    text: string;
    disabled?: boolean;
    onPress: (e: GestureResponderEvent) => void;
};

function Button({text, ...rest}: ElementProps): React.JSX.Element {
    return (
        <PaperButton
        style={styles.container}
        mode="contained"
        {...rest}>
            {text}
        </PaperButton>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: Styles.Margin.vertical,
    }
});

export default Button;
