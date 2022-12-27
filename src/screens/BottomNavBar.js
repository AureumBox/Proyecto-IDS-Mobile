import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

// Screen Imports
import Fantasy from './mainScreen/Fantasy'
import Shop from './mainScreen/Shop'
import Home from './mainScreen/Home'
import Profile from './mainScreen/Profile'
import AlbumNavigator from './mainScreen/Album/AlbumNavigator';
import Album from './mainScreen/Album/Album';

const { height } = Dimensions.get('window')
const Tab = createBottomTabNavigator();

export default function BottomNavBar({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        let iconSize // Para luego tamaños personalizados
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
                })}>
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#C10001',
                        tabBarInactiveTintColor: 'grey',
                        tabBarStyle: { padding: 0, height: height / 10 },
                        tabBarShowLabel: false,
                    }}
                />
                <Tab.Screen
                    name='AlbumNavigator'
                    component={AlbumNavigator}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#C10001',
                        tabBarInactiveTintColor: 'grey',
                        tabBarStyle: { padding: 0, height: height / 10 },
                        tabBarShowLabel: false
                    }}
                />
                <Tab.Screen
                    name='Fantasy'
                    component={Fantasy}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#C10001',
                        tabBarInactiveTintColor: 'grey',
                        tabBarStyle: { padding: 0, height: height / 10 },
                        tabBarShowLabel: false
                    }}
                />
                <Tab.Screen
                    name='Shop'
                    component={Shop}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#C10001',
                        tabBarInactiveTintColor: 'grey',
                        tabBarStyle: { padding: 0, height: height / 10 },
                        tabBarShowLabel: false
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#C10001',
                        tabBarInactiveTintColor: 'grey',
                        tabBarStyle: { padding: 0, height: height / 10 },
                        tabBarShowLabel: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}