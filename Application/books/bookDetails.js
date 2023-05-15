import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Image, Overlay, Text, ThemeConsumer } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Tts from "react-native-tts";

const BookDetails = ({ route }) => {

    // Getting values from previous screen buy using route
    const item = route.params

    //Using navigation
    const navigation = useNavigation()

    // Using state
    const [subscribed, setSubscribed] = useState(false)
    const [voiceContent, setVoiceContent] = useState(item.content)
    const [speak, setSpeak] = useState(false)
    const [visible, setVisible] = useState(false)
    const [fontSize, setFontSize] = useState(18);

    //using useEffect for handle press
    useEffect(() => {
        handlePress()
    }, [speak])

    // using useEffect for getData
    useEffect(() => {
        getData()
    }, [])

    const increaseFontSize = () => {
       fontSize < 30 && setFontSize(fontSize + 2)
    }
    

    const decreaseFontSize = () => {
        fontSize > 16 && setFontSize(fontSize - 2)
    }

    // Handle press function for Tts Speak 
    const handlePress = () => {
        if (speak) {
            Tts.speak(voiceContent)
        }
        else {
            Tts.stop()
        }
    }

    // Getting key and subscribed/unSubscribed from firebase 
    const getData = async () => {
        let keyData = await AsyncStorage.getItem("userKey")
        const res = await axios.get(`https://book-2bceb-default-rtdb.firebaseio.com/books/${keyData}/subscribed.json`)
        setSubscribed(res.data.subscribed)
    }

    // This Function for text length displaying
    const textTruncate = (str, length, ending) => {
        if (length == null) {
            length = 85;
        }
        if (ending == null) {
            ending = " "
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending
        } else {
            return str
        }
    }

    // Main Function of code executing
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.bookDetails.mainContainer}>

                        <View style={theme.bookDetails.container}>
                            <Icon name="navigate-before" size={50} style={theme.bookDetails.navigateBeforeIcon} onPress={() => { setSpeak(false), navigation.goBack() }}></Icon>
                            <Text style={theme.bookDetails.nameText} >{item.name}</Text>
                            <Icon name={speak ? "hearing-disabled" : "hearing"} style={theme.bookDetails.hearingIcon} size={30} onPress={() => subscribed ? setSpeak(!speak) : setVisible(true)} />
                        </View>

                        <View>
                            <Icon name="add" size={40} onPress={() => increaseFontSize()} style={theme.bookDetails.addIcon}></Icon>
                            <Icon name="minimize" size={40} style={theme.bookDetails.minimize} onPress={() => decreaseFontSize()}></Icon>
                        </View>

                        <View style={theme.bookDetails.imageConatiner}>
                            <Image source={item.req} style={theme.bookDetails.image}></Image>
                        </View>

                        <ScrollView>
                            <Text style={{
                                alignSelf: "center",
                                fontSize: fontSize,
                                fontWeight: "700",
                                marginBottom: 90,
                                padding: 27,
                                textAlign: "justify",
                                overflow: "hidden",
                                marginTop:50,
                            }}> {subscribed ? item.content : textTruncate(item.content)} {!subscribed && <Text onPress={() => setVisible(true)} style={theme.bookDetails.readMoreText}>Read More....</Text>} </Text>

                        </ScrollView>

                        <Overlay
                            animationType="fade"
                            transparent={true}
                            visible={visible}
                            overlayStyle={theme.bookDetails.overlayStyle}
                            onBackdropPress={() => { setVisible(false) }}
                        >
                            <View style={theme.bookDetails.overlayContainer}>
                                <Text style={theme.bookDetails.subscribeText}>Subscribe/Buy to read this Book</Text>
                                <Image source={require("../Assets/Book_Details/buy.gif")} style={theme.bookDetails.overlayGif} onPress={() => navigation.navigate("PaymentPage", item)}></Image>
                                <Text onPress={() => navigation.navigate("PaymentPage", item)} style={theme.bookDetails.clickHereText}>Click Here</Text>
                            </View>
                        </Overlay>
                    </View >
                )
            }
        </ThemeConsumer >
    )
}

export default BookDetails