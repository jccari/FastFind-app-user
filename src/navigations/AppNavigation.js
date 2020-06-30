/*****
 * Purpose:
 *      Contain a main navigation in app.
 *      (you think it as a root navigation)
 *
 * Screen:
 *      - LoginScreen
 *      - MainNavigation ( tabs )
 *
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import MainNavigation from './MainNavigation';
// import RegisterStack from './RegisterStack';
// import AuthLoadingScreen from '../screens/AuthLoadingScreen';

//// define a stack to contain all screens or grouped screens
const NavAppStack = createStackNavigator();

///// render a main navigation
export function AppNavigation() {
    return (
        <NavigationContainer>
            <NavAppStack.Navigator
                initialRouteName="login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <NavAppStack.Screen
                    name="login"
                    component={LoginScreen}
                    // options={{
                    //     headerShown: false,
                    // }}
                />
                <NavAppStack.Screen
                    name="main"
                    component={MainNavigation}
                    options={{
                        title: 'Principal',
                    }}
                />
                {/*<NavAppStack.Screen*/}
                {/*    name="register"*/}
                {/*    component={RegisterStack}*/}
                {/*    options={{title: 'Registro'}}*/}
                {/*/>*/}
                {/*<NavAppStack.Screen*/}
                {/*    name="loading"*/}
                {/*    component={AuthLoadingScreen}*/}
                {/*    options={{*/}
                {/*        headerShown: false,*/}
                {/*    }}*/}
                {/*/>*/}
            </NavAppStack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
