import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screen Imports
import Fantasy from './mainScreen/Fantasy'
import Album from './mainScreen/Album'
import Inventory from './mainScreen/Shop'
import MissionsTab from './mainScreen/MissionsTab'
import Profile from './mainScreen/Profile'

const Tab = createBottomTabNavigator();

export default function BottomNavBar({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName='Fantasy'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        let iconSize // Para luego tamaños personalizados
                        let rn = route.name

                        if (rn === 'Fantasy') {
                            iconName = focused ? 'football' : 'football-outline'
                        } else if (rn === 'Album') {
                            iconName = focused ? 'book' : 'book-outline'
                        } else if (rn === 'Inventory') {
                            iconName = focused ? 'basket' : 'basket-outline'
                        } else if (rn === 'MissionsTab') {
                            iconName = focused ? 'checkbox-outline' : 'checkbox'
                        } else if (rn === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline'
                        }

                        return <Ionicons name={iconName} color={color} size={45} />
                    },
                })}>
                    
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
                    name='Inventory'
                    component={Inventory}
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
                    name='MissionsTab'
                    component={MissionsTab}
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