import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Image, Overlay, Text, ThemeConsumer } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Book_Details = ({ route }) => {
    const navigation = useNavigation()
    const [subscribed, setSubscribed] = useState(false)
    const [voiceVisible, setVoiceVisible] = useState(false)
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        let keyData = await AsyncStorage.getItem("userKey")
        const res = await axios.get(`https://book-2bceb-default-rtdb.firebaseio.com/books/${keyData}/subscribed.json`)
        setSubscribed(res.data.subscribed)
    }
    const [visible, setVisible] = useState(false)
    const item = route.params
    const textTruncate = (str, length, ending) => {
        if (length == null) {
            length = 85;
        }
        if (ending == null) {
            ending = " "
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.Book_Details_Styles.mainContainer}>
                        <View style={theme.Book_Details_Styles.container}>
                            <Icon name="navigate-before" size={50} style={theme.Book_Details_Styles.navigate_before_icon} onPress={() => navigation.goBack()}></Icon>
                            <Text style={theme.Book_Details_Styles.name_text}>{item.name}</Text>
                            <Icon name="hearing" style={theme.Book_Details_Styles.hearingIcon} size={30}/>
                            <Text style={theme.Book_Details_Styles.readAloud}>Readaloud</Text>
                        </View>
                        <ScrollView>
                            <View>
                                <Image source={item.req} style={theme.Book_Details_Styles.image}></Image>
                                <View>
                                    <Text style={theme.Book_Details_Styles.main_text}> {subscribed ? item.content : textTruncate(item.content)} {!subscribed && <Text onPress={() => setVisible(true)} style={theme.Book_Details_Styles.read_more_text}>Read More....</Text>} </Text>
                                </View>
                            </View>
                        </ScrollView>

                        <Overlay
                            animationType="fade"
                            transparent={true}
                            visible={visible}
                            overlayStyle={theme.Book_Details_Styles.overlayStyle}
                            onBackdropPress={() => { setVisible(false) }}
                        >
                            <View style={theme.Book_Details_Styles.overlay_container}>
                                <Text style={theme.Book_Details_Styles.subscribe_text}>Subscribe/Buy to read this Book</Text>
                                <Image source={require("../Assets/Book_Details/buy.gif")} style={theme.Book_Details_Styles.overlay_gif} onPress={() => navigation.navigate("Payment_page", item)}></Image>
                                <Text onPress={() => navigation.navigate("Payment_page", item)} style={theme.Book_Details_Styles.click_here_text}>Click Here</Text>
                            </View>
                        </Overlay>

                    </View >

                )
            }
        </ThemeConsumer>
    )
}

export default Book_Details