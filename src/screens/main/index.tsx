import React, { useEffect, useState } from "react";

import { useIntl } from "react-intl";

import Container from "../../components/container";
import Button from "../../components/button";
import BalancePanel from "./balance-panel";
import Styles from '../../styles';
import api from "../../api";
import List from "../../components/list";
import { StyleSheet, View } from "react-native";
import Panel from "../../components/panel";

const MainScreen = ({navigation}) => {
    const intl = useIntl();

    const [total, setTotal] = useState(1000);

    const [locked, setLocked] = useState(200);

    const [recentTransactions, setRecentTransactions] = useState([]);
    useEffect(() => {
        api.getRecentTransactions().then(res => {
            setRecentTransactions(res.data);
        });
    }, []);

    const [activeLocks, setActiveLocks] = useState([]);
    useEffect(() => {
        api.getActiveLocks().then(res => {
            setActiveLocks(res.data);
        });
    }, []);

    return (
        <Container>
            <BalancePanel
                title={intl.formatMessage({id: 'total'})}
                value={total}
                backgroundColor={Styles.Colors.primary}
            />

            <BalancePanel
                title={intl.formatMessage({id: 'locked'})}
                value={locked}
                backgroundColor={Styles.Colors.warning}
            />

            <List
                title={intl.formatMessage({id: 'recentTransactions'})}
                data={recentTransactions}
            />

            <List
                title={intl.formatMessage({id: 'activeLocks'})}
                data={activeLocks}
            />

            <View>
                <View style={styles.row}>
                    <Button
                        text={intl.formatMessage({id: 'fund'})}
                        onPress={e => navigation.navigate('Fund')}
                        style={styles.button}
                        icon="cash-plus"
                    />

                    <Button
                        text={intl.formatMessage({id: 'defund'})}
                        onPress={e => navigation.navigate('Defund')}
                        buttonColor={Styles.Colors.danger}
                        style={styles.button}
                        icon="cash-minus"
                    />
                </View>

                <View style={styles.row}>
                    <Button
                        text={intl.formatMessage({id: 'transfer'})}
                        onPress={e => navigation.navigate('Transfer')}
                        buttonColor={Styles.Colors.accent}
                        style={styles.button}
                        icon="bank-transfer-out"
                    />

                    <Button
                        text={intl.formatMessage({id: 'lock'})}
                        onPress={e => navigation.navigate('Lock')}
                        buttonColor={Styles.Colors.warning}
                        style={styles.button}
                        icon="lock"
                    />
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
    },
    button: {
        flex: 1,
        marginHorizontal: Styles.Margin.horizontal,
    }
});

export default MainScreen;
