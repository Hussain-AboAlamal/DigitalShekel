import React, { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

import { Surface } from "react-native-paper";

import Styles from '../../styles';

type ElementProps = PropsWithChildren<{
    containerStyle?: any;
}>;

function Panel({children, containerStyle}: ElementProps): React.JSX.Element {
    return <Surface
    elevation={2}
    style={[styles.container, containerStyle]}>
        {children}
    </Surface>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: (Styles.Margin.vertical * 2),
        borderRadius: 8,
        padding: 24,
    },
});

export default Panel;
