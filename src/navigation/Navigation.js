import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Rutas
import Home from '../screens/homePageAuth/landingPage/HomeScreen';
import LogIn from '../screens/homePageAuth/LogIn';
import SignIn from '../screens/homePageAuth/SignIn';
import PWRecovery from '../screens/homePageAuth/PWRecovery';
import PWReset from '../screens/homePageAuth/PWReset';
import BottomNavBar from '../screens/BottomNavBar';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={'HomeScreen'}
                screenOptions={{ presentation: 'transparentModal', headerShown: false }}
            >
                <Stack.Screen name={'HomeScreen'} component={Home} />
                <Stack.Screen name={'LogIn'} component={LogIn} />
                <Stack.Screen name={'SignIn'} component={SignIn} />
                <Stack.Screen name={'PWRecovery'} component={PWRecovery} />
                <Stack.Screen name={'PWReset'} component={PWReset} />
                <Stack.Screen name={'BottomNavBar'} component={BottomNavBar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}