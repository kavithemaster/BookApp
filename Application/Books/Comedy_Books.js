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
                    <View style={theme.Comedy_Book_Styles.mainContainer}>
                        <Text style={theme.Comedy_Book_Styles.text}>Oops !!! </Text>
                        <Text style={theme.Comedy_Book_Styles.text1}>Sorry All Books are saled</Text>
                        <Image source={require("../Assets/Comedy/not_available.gif")} style={theme.Comedy_Book_Styles.image}></Image>
                        <TouchableOpacity style={theme.Comedy_Book_Styles.button} onPress={() => navigation.goBack()}>
                            <Text style={theme.Comedy_Book_Styles.buttonText}> Go Back </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </ThemeConsumer>

    )
}




export default Comedy