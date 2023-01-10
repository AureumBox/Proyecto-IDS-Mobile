import * as React from 'react'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Header from '../components';
import Home from './home';
import AlbumNavigator from './album/AlbumNavigator';
import Fantasy from './fantasy';
import Shop from './market';

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
                        }
                        return <Ionicons name={iconName} color={color} size={45} />
                    },
                    headerTitle: () => <Header/>,
                    headerBackVisible: false,
                    headerBackTitleVisible: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#E7484D',
                    tabBarInactiveTintColor: 'grey',
                    tabBarStyle: { padding: 0, height: height / 10 }
                })}>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='AlbumNavigator' component={AlbumNavigator} />
                <Tab.Screen name='Fantasy' component={Fantasy} />
                <Tab.Screen name='Shop' component={Shop} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}