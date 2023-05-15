import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image, Text, ThemeConsumer } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Comedy = () => {
    const navigation = useNavigation()
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.comedyBook.mainContainer}>
                        <Text style={theme.comedyBook.text}>Oops !!! </Text>
                        <Text style={theme.comedyBook.text1}>Sorry All Books are saled</Text>
                        <Image source={require("../Assets/Comedy/not_available.gif")} style={theme.comedyBook.image}></Image>
                        <TouchableOpacity style={theme.comedyBook.button} onPress={() => navigation.goBack()}>
                            <Text style={theme.comedyBook.buttonText}> Go Back </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </ThemeConsumer>

    )
}




export default Comedy