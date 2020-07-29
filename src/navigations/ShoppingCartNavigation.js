import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ShoppingCartScreen} from '../screens';


const ShoppingCartNav = createStackNavigator();

export function ShoppingCartNavigation(){
    return (
        <ShoppingCartNav.Navigator
            initialRouteName="shoppingCart"
            screenOptions={{
                headerShown: false,
            }}
        >
            <ShoppingCartNav.Screen
                name="shoppingCart"
                component={ShoppingCartScreen}
                // options={{
                //     headerShown: false,
                // }}
            />
            {/*<ShoppingCartNav.Screen*/}
            {/*    name="productList"*/}
            {/*    component={ThankYouScreen}*/}
            {/*    options={{*/}
            {/*        title: 'Productos',*/}
            {/*        headerShown: false,*/}
            {/*    }}*/}
            {/*/>*/}
        </ShoppingCartNav.Navigator>
    );
}
