import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useIntl } from 'react-intl';
import { PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';

import WelcomeScreen from '../../src/screens/welcome';
import MainScreen from '../screens/main';
import Styles from '../styles';

const Stack = createNativeStackNavigator();

const Router = (): React.JSX.Element => {
    const intl = useIntl();
    
    // customize paper theme
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: Styles.Colors.primary,
            secondary: Styles.Colors.accent,
        },
    };

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: intl.formatMessage({id: 'welcome'}) }}/>
                    <Stack.Screen name="Main" component={MainScreen} options={{ title: intl.formatMessage({id: 'dashboard'}) }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default Router;
