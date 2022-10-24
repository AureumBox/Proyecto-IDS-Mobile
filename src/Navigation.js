import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Bienvenida from './components/screens/Bienvenida';
import LogIn from './components/screens/LogIn';
import SignIn from './components/screens/SignIn';

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}