import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

type ElementProps = PropsWithChildren<{}>;

const Container = ({children}: ElementProps) => {
    return <View style={styles.container}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
    }
});

export default Container;
