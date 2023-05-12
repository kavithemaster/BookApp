import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Book_Category from "./Books/Book_Category";
import Favourite from "./Favourite";
import Profile from "./Profile";

const Top = createMaterialTopTabNavigator();
const Main_Content = () => {
    return (
        // Settings Screens of Books,Favourite,Profile in Top Tab Navigator
        <Top.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === "Book_Category") {
                        iconName = 'menu-book';
                        size = focused ? 26 : 24;
                        color = focused ? 'red' : 'green';
                    }
                    else if (route.name === "Favourites") {
                        iconName = 'favorite';
                        size = focused ? 26 : 24;
                        color = focused ? 'red' : 'green';
                    }
                    else if (route.name === "Profile") {
                        iconName = 'perm-identity';
                        size = focused ? 26 : 24;
                        color = focused ? 'red' : 'green';
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
            <Top.Screen name="Book_Category" component={Book_Category} />
            <Top.Screen name="Favourites" component={Favourite} />
            <Top.Screen name="Profile" component={Profile} />
        </Top.Navigator>
    )
}

export default Main_Content;