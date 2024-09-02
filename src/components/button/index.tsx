import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";

import { Button as PaperButton } from "react-native-paper";
import { Props as PaperButtonProps } from "react-native-paper/src/components/Button/Button";

import Styles from '../../../src/styles';

export type ElementProps = Omit<PaperButtonProps, 'children'> & {
    text: string;
};

function Button({text, style, ...rest}: ElementProps): React.JSX.Element {
    return (
        <PaperButton
        style={[styles.container, style]}
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
