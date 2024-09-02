import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";

import { Surface, Text } from 'react-native-paper';

import Styles from '../../styles';
import Panel from "../../components/panel";

const textColor = '#fff';

type ElementProps = {
    title: string;
    value: number;
    backgroundColor: ColorValue;
};

function BalancePanel({title, value, backgroundColor}: ElementProps): React.JSX.Element {
    return <Panel
    containerStyle={[styles.container, {backgroundColor}]}>
        <Text
        variant="displayMedium"
        style={styles.title}>
            {title}
        </Text>

        <Text
        variant="headlineLarge"
        style={styles.value}>
            {value || 0}{'$'}
        </Text>
    </Panel>
}

const styles = StyleSheet.create({
    container: {
        minHeight: 100,
        flexDirection: 'row',
    },
    title: {
        color: '#f2e6e6',
        flex: 1,
    },
    value: {
        marginTop: 24,
        color: textColor,
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'right',
        textShadowColor: textColor,
        textShadowOffset: {
            width: 0.2,
            height: 0.2,
        },
        textShadowRadius: 2,

    }
});

export default BalancePanel;
