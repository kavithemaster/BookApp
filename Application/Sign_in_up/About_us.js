import React from "react";
import { View, Text } from "react-native";
import { ThemeConsumer } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'

const AboutUs = () => {
    const navigation = useNavigation()
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.About_us_Style.mainContainer}>
                        <Icon name="arrow-left" size={30} style={theme.About_us_Style.arrow_icon} onPress={() => navigation.goBack()}></Icon>
                        <Text style={theme.About_us_Style.text}>Books have the power to improve your vocabulary by introducing you to new words. The more you read, the more your vocabulary grows, along with your ability to effectively communicate. Additionally, reading improves writing skills by helping the reader understand and learn different writing styles.</Text>
                        <Text style={theme.About_us_Style.text}>Good about reading books in online
                            1. E-Book benefits
                            2. Save a trip to the Library. ...
                            3.No late fees. ...
                            4.Read anytime, anywhere. ...
                            5.One device, many books. ...
                            6.A dictionary at your fingertips. ...
                            7.Search in seconds. ...
                            8.Customize how you read. ...
                            9.Our collection is always growing.</Text>
                    </View>
                )
            }
        </ThemeConsumer>
    )
}

export default AboutUs