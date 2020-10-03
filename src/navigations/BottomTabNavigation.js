import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/DASHBOARD/Dashboard";


import {
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome5,
    Entypo,
    Feather,
} from "@expo/vector-icons";
import { textSize, primaryColor, inputColor } from "../utils/utiles";

const fontSize = textSize();
const Tab = createBottomTabNavigator();
const icons = {
    cart: <AntDesign name="shoppingcart" size={18} color={"gray"} />,
    setting: <AntDesign name="setting" size={18} color={"gray"} />,
    home: <Feather name="home" size={18} color="black" />,
    property: <FontAwesome5 name="home" size={18} color="gray" />,
    user: <AntDesign name="user" size={18} color={"gray"} />,
    document: (
        <MaterialCommunityIcons
            name="file-document-box-outline"
            size={18}
            color="gray"
        />
    ),
    payment: <Entypo name="credit-card" size={18} color="gray" />,
};
function BottomTabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeBackgroundColor: inputColor,
                inactiveBackgroundColor: "#f8f8f8",
                activeTintColor: primaryColor,
                inactiveTintColor: primaryColor,
                tabStyle: {
                    paddingTop: 10,
                },
                labelStyle: {
                    fontSize: fontSize - 7,
                    fontFamily: "suma-b",
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Dashboard}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => icons.home,
                }}
            />

            <Tab.Screen
                name="Documents"
                component={Dashboard}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => icons.setting,
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Dashboard}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => icons.user,
                }}
            />
        </Tab.Navigator>
    );
}



export default BottomTabNavigation;
