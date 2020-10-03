import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import { skyblue } from '../utils/utiles';
import BudgetListScreen from '../screens/DASHBOARD/BudgetListScreen';
import ExpensesScreen from '../screens/DASHBOARD/ExpensesScreen';
const Stack = createStackNavigator();




const DashboardStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={BottomTabNavigation} options={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: skyblue
                }
            }} />

            <Stack.Screen name="BudgetListScreen" component={BudgetListScreen} options={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: skyblue
                }
            }} />
            <Stack.Screen name="ExpensesScreen" component={ExpensesScreen} options={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: skyblue
                }
            }} />




        </Stack.Navigator>
    )
}


export default DashboardStackNavigation;