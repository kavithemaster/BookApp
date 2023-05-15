import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image, Text, ThemeConsumer } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Love = () => {
    const navigation = useNavigation()
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.loveBook.mainContainer}>
                        <Text style={theme.loveBook.text}>Oops !!! </Text>
                        <Text style={theme.loveBook.text1}>Sorry All Books are saled</Text>
                        <Image source={require("../Assets/Comedy/not_available.gif")} style={theme.loveBook.image}></Image>
                        <TouchableOpacity style={theme.loveBook.button} onPress={() => navigation.goBack()}>
                            <Text style={theme.loveBook.buttonText}> Go Back </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </ThemeConsumer>

    )
}


export default Love