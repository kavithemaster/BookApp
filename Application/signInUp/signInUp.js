import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./login";
import Register from "./register";


const Tab = createBottomTabNavigator();

const SignInUp = () => {
    // Setting up Both Login and Register page screens in Bottom Tab
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard:true,
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === "Login") {
                        iconName = 'login';
                        size = focused ? 25 :23;
                        color = focused ? 'green' : 'red';
                    }
                    else if (route.name === "Register") {
                        iconName = 'location-enter';
                        size = focused ? 25 : 23;
                        color = focused ? 'green' : 'red';
                        tabBarIcon = "plus"
                    }
                    return (
                        <Icon
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    )
                }
            })}
        >
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    )
}

export default SignInUp;
