import React from "react";

import Input from "../../components/input";
import { View } from "react-native";

const WelcomeScreen = () => {
    return (
        <View
        style={{flex: 1, backgroundColor: '#000'}}>
            <Input
            label={'Enter Wallet Id'}
            value=""
            onChangeText={(value) => console.log(value)}
        />
        </View>
    )
}

export default WelcomeScreen;
