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
            <Stack.Navigator initialRouteName={HPANavigation.HOME}
                screenOptions={{ presentation: 'transparentModal' }}
            >
                <Stack.Screen
                    name={HPANavigation.HOME}
                    component={HPAHomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={HPANavigation.LOGIN}
                    component={HPALogIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={HPANavigation.SIGNIN}
                    component={HPASignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={HPANavigation.PWRECOVERY}
                    component={HPAPWRecovery}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={HPANavigation.PWRESET}
                    component={HPAPWReset}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={HPANavigation.BNB}
                    component={BNBMainScreen}
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}