import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Screen Imports
import Fantasy from './mainScreen/Fantasy'
import Album from './mainScreen/Album'
import Shop from './mainScreen/Shop'
import Home from './mainScreen/Home'
import Profile from './mainScreen/Profile'

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
                            iconName = focused ? 'shield-home' : 'shield-home-outline'
                            return <MaterialCommunityIcons name={iconName} size={50} color={color} />
                        } else if (rn === 'Album') {
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
                        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                        tabBarStyle: { padding: 0, height: 60 },
                        tabBarShowLabel: false
                    }}
                />
                <Tab.Screen
                    name='Album'
                    component={Album}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: '#C10001',
                        tabBarInactiveTintColor: 'grey',
                        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                        tabBarStyle: { padding: 0, height: 60 },
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
                        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                        tabBarStyle: { padding: 0, height: 60 },
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
                        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                        tabBarStyle: { padding: 0, height: 60 },
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
                        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                        tabBarStyle: { padding: 0, height: 60 },
                        tabBarShowLabel: false
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}