import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BookCategory from "./books/bookCategory";
import Favourite from "./favourite";
import Profile from "./profile";

const Top = createMaterialTopTabNavigator();
const MainContents = () => {
    return (
        // Settings Screens of Books,Favourite,Profile in Top Tab Navigator
        <Top.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === "BookCategory") {
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
            <Top.Screen name="BookCategory" component={BookCategory} />
            <Top.Screen name="Favourites" component={Favourite} />
            <Top.Screen name="Profile" component={Profile} />
        </Top.Navigator>
    )
}

export default MainContents;