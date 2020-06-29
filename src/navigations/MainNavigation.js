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
import CategoryListScreen from '../screens/CategoryListScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import StoreListScreeen from '../screens/StoreListScreen';

//// define a stack to contain all screens or grouped screens
const TabStackNav = createBottomTabNavigator();

///// render a main navigation
export default function MainNavigation() {
    return (
        <TabStackNav.Navigator
            initialRouteName="storeList"
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
                    title: 'home',
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" type="font-awesome" size={size} color={color} />
                    ),
                }}
            />
            <TabStackNav.Screen
                name="categoryList"
                component={CategoryListScreen}
                options={{
                    title: 'categoryList',
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="list-ul" type="font-awesome" size={size} color={color} />
                    ),
                }}
            />
            <TabStackNav.Screen
                name="shoppingCart"
                component={ShoppingCartScreen}
                options={{
                    title: 'shoppingCart',
                    tabBarLabel: 'Carrito',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="shopping-cart" type="font-awesome" size={size} color={color} />
                    ),
                }}
            />
            <TabStackNav.Screen
                name="storeList"
                component={StoreListScreeen}
                options={{
                    title: 'storeList',
                    tabBarLabel: 'Tiendas',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="store" type="font-awesome-5" size={size} color={color} />
                    ),
                }}
            />
            <TabStackNav.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    title: 'perfil',
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="user" type="font-awesome" size={size} color={color} />
                    ),
                }}
            />
        </TabStackNav.Navigator>
    );
}
