import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../src/screens/welcome';
import MainScreen from '../screens/main';
import { useIntl } from 'react-intl';

const Stack = createNativeStackNavigator();

const Router = (): React.JSX.Element => {
    const intl = useIntl();
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: intl.formatMessage({id: 'welcome'}) }}/>
                <Stack.Screen name="Main" component={MainScreen} options={{ title: intl.formatMessage({id: 'dashboard'}) }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
