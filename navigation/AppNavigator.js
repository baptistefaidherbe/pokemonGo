// Librairies
import React from 'react';
import { AppStacksNavigator } from './Navigators';
import { NavigationContainer } from '@react-navigation/native';


function AppNavigator() {
    return (
        <NavigationContainer>
            <AppStacksNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;