import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screen Imports
//HomePageAuth Screens
import HomeScreen from './homePageAuth/HomeScreen';
import LogIn from './homePageAuth/LogIn';
import SignIn from './homePageAuth/SignIn';
import PWRecovery from './homePageAuth/PWRecovery'
import PWReset from './homePageAuth/PWReset';
/*******************************************************/
import BottomNavBar from './BottomNavBar';
/*******************************************************/

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
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
                <Stack.Screen
                    name='BottomNavBar'
                    component={BottomNavBar}
                    options={{
                        headerShown: true,
                        title: 'Offside'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}