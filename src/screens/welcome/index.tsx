import React, { useState } from "react";

import { useIntl } from "react-intl";

import Input from "../../components/input";
import Container from "../../components/container";
import Button from "../../components/button";

const WelcomeScreen = ({navigation}: any) => {
    const intl = useIntl();

    const [model, setModel] = useState({
        walletId: '',
    });

    /**
     * Handles form input change event, and set model values
     * 
     * @param key model property name
     * @param value new value
     */
    function onModelChagne(key: string, value: string) {        
        setModel({
            ...model,
            [key]: value,
        });
    }

    /**
     * Navigate to MainScreen
     */
    function goToMainSceen() {        
        navigation.navigate('Main');
    }

    return (
        <Container>
            <Input
                label={intl.formatMessage({id: 'enterwalletId'})}
                value={model.walletId}
                onChangeText={(value) => onModelChagne('walletId', value)}
            />

            <Button
                text={intl.formatMessage({id: 'openExistingWallet'})}
                disabled={!model.walletId}
                onPress={goToMainSceen}
            />

            <Button
                mode="text"
                text={intl.formatMessage({id: 'openNewWallet'})}
                onPress={goToMainSceen}
            />
        </Container>
    )
}

export default WelcomeScreen;
