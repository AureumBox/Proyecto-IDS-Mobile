import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

// Screen Imports
import Home from './mainScreen/Home';
import AlbumNavigator from './mainScreen/Album/AlbumNavigator';
import Fantasy from './mainScreen/Fantasy';
import Shop from './mainScreen/Market/Shop';
import Profile from './mainScreen/Profile';

const { height } = Dimensions.get('window')
const Tab = createBottomTabNavigator();

export default function BottomNavBar({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName
                        let rn = route.name
                        if (rn === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === 'AlbumNavigator') {
                            iconName = focused ? 'book' : 'book-outline'
                        } else if (rn === 'Fantasy') {
                            iconName = focused ? 'football' : 'football-outline'
                        } else if (rn === 'Shop') {
                            iconName = focused ? 'basket' : 'basket-outline'
                        } else if (rn === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline'
                        }

                        return <Ionicons name={iconName} color={color} size={45} />
                    },
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#C10001',
                    tabBarInactiveTintColor: 'grey',
                    tabBarStyle: { padding: 0, height: height / 10 }
                })}>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='AlbumNavigator' component={AlbumNavigator} />
                <Tab.Screen name='Fantasy' component={Fantasy} />
                <Tab.Screen name='Shop' component={Shop} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}