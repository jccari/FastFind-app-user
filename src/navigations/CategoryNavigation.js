import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoryListScreen, ProductScreen} from '../screens';


const NavCategoryStack = createStackNavigator();

export function CategoryNavigation() {
    return (
        <NavCategoryStack.Navigator
            initialRouteName="categoryList"
            screenOptions={{
                headerShown: false,
            }}
        >
            <NavCategoryStack.Screen
                name="categoryList"
                component={CategoryListScreen}
                // options={{
                //     headerShown: false,
                // }}
            />
            <NavCategoryStack.Screen
                name="productList"
                component={ProductScreen}
                options={{
                    title: 'Productos',
                    headerShown: false,
                }}
            />
        </NavCategoryStack.Navigator>
    );
}
