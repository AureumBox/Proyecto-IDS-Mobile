import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Bienvenida from './screens/Bienvenida';
import LogIn from './screens/LogIn';
import SignIn from './screens/SignIn';
import PWRecovery from './screens/PWRecovery'
import PWReset from './PWReset';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Bienvenida'
                    component={Bienvenida}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='LogIn'
                    component={LogIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='SignIn'
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='PWRecovery'
                    component={PWRecovery}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='PWReset'
                    component={PWReset}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}