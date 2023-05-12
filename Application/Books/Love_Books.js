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
                    <View style={theme.Love_Book_Styles.mainContainer}>
                        <Text style={theme.Love_Book_Styles.text}>Oops !!! </Text>
                        <Text style={theme.Love_Book_Styles.text1}>Sorry All Books are saled</Text>
                        <Image source={require("../Assets/Comedy/not_available.gif")} style={theme.Love_Book_Styles.image}></Image>
                        <TouchableOpacity style={theme.Love_Book_Styles.button} onPress={() => navigation.goBack()}>
                            <Text style={theme.Love_Book_Styles.button_text}> Go Back </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </ThemeConsumer>

    )
}


export default Love