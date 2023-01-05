import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HPANavigation from '../constants/HPANavigation';
import {
    HPAHomeScreen,
    HPALogIn,
    HPASignIn,
    HPAPWRecovery,
    HPAPWReset,
    BNBMainScreen
} from '../screens';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={HPANavigation.HOME}
                screenOptions={{ presentation: 'transparentModal', headerShown: false }}
            >
                <Stack.Screen name={HPANavigation.HOME} component={HPAHomeScreen} />
                <Stack.Screen name={HPANavigation.LOGIN} component={HPALogIn} />
                <Stack.Screen name={HPANavigation.SIGNIN} component={HPASignIn} />
                <Stack.Screen name={HPANavigation.PWRECOVERY} component={HPAPWRecovery} />
                <Stack.Screen name={HPANavigation.PWRESET} component={HPAPWReset} />
                <Stack.Screen name={HPANavigation.BNB} component={BNBMainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}