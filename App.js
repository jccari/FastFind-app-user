import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'react-native-elements';
// import theme from './src/constants/Theme';
import LoginScreen from './src/screens/LoginScreen';
import AppNavigation from './src/navigations/AppNavigation';

// const Stack = createStackNavigator();

function App() {
    return <AppNavigation/>;
    // return (
    //         <NavigationContainer>
    //             <Stack.Navigator>
    //                 <Stack.Screen name="Login" component={LoginScreen}/>
    //             </Stack.Navigator>
    //         </NavigationContainer>
    // );
}

export default App;
