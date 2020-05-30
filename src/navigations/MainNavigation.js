/****
 * Purpose:
 *      contain a botttom-tab type navigation with all screens
 *      in each tab.
 *
 * Screen:
 *      - MapScreen
 *      - SalesmanScreen
 *      - ProfileScreen
 *
 */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
// import ProfileStack from '../navigations/ProfileStack';
import Colors from '../constants/Colors';
import ProfileScreen from '../screens/ProfileScreen';

//// define a stack to contain all screens or grouped screens
const TabStackNav = createBottomTabNavigator();

///// render a main navigation
export default function MainNavigation() {
    return (
        <TabStackNav.Navigator
            initialRouteName="home"
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.secondary,
                activeBackgroundColor: Colors.white,
                inactiveBackgroundColor: Colors.light,
            }}>
            <TabStackNav.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'mapas',
                    tabBarLabel: 'mapa',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="map" type="font-awesome" size={size} color={color} />
                    ),
                }}
            />
            <TabStackNav.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    title: 'perfil',
                    tabBarLabel: 'perfil',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="user" type="font-awesome" size={size} color={color} />
                    ),
                }}
            />
        </TabStackNav.Navigator>
    );
}
