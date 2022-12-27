import React from 'react'
import Album from './Album'
import AlbumPage from './AlbumPage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function AlbumNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={'Album'}
        >
            <Stack.Screen
                name='Album'
                component={Album}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='AlbumPage'
                component={AlbumPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}