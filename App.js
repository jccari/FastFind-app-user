import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import AppContextProvider from './src/contexts/AppContext';

function App() {
    return (
        <AppContextProvider>
            <AppNavigation/>
        </AppContextProvider>
    );
}

export default App;
