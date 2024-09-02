import React, { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type ElementProps = PropsWithChildren<{}>;

const Container = ({children}: ElementProps) => {
    return <ScrollView style={styles.container}>
        {children}
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
    }
});

export default Container;
