import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/AUTH/LoginScreen';
import DashboardNaviagtion from './DashboardNaviagtion';
import { inputColor } from '../utils/utiles';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerStyle: {
                    backgroundColor: "gray",
                },
                headerTintColor: '#fff'
            }}>

                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={DashboardNaviagtion} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default Navigation;
