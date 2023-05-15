import React, { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Avatar, Overlay, Text, ThemeConsumer } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Payment_page = ({ route }) => {
    const navigation = useNavigation()
    // Using useState for modal
    const [visible, setVisible] = useState(false)
    const [modalvisible, setModalVisible] = useState(false)

    // Getting Values from params
    const item = route.params

    //Timeout for modalvisible and setModalVisible
    const close = async () => {
        let keyData = await AsyncStorage.getItem("userKey")
        await axios.put(`https://book-2bceb-default-rtdb.firebaseio.com/books/${keyData}/subscribed.json`, { subscribed: true })
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
        }, 2000);
        setTimeout(()=>{
            setVisible(false)
            navigation.navigate("Main_Content")
        }, 1900)
    }

    // Main Function code execution with two Modal page
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.Payment_style.maincontainer}>
                        <Icon name="arrow-left" size={47} onPress={() => navigation.goBack()} style={theme.Payment_style.icon} />
                        <Text style={theme.Payment_style.subscribeBuyText}>Do you Need to Subscribe/Buy {item.name} Book</Text>
                        <Overlay
                            animationType="slide"
                            transparent={true}
                            visible={visible}
                            overlayStyle={theme.Payment_style.overLay}
                        >
                            <View style={theme.Payment_style.Overlay_container}>
                                <Icon name="arrow-left" size={47} onPress={() => setVisible(false)} style={theme.Payment_style.arrowLeft} />
                                    <Image source={require("../Application/Assets/Payments/Conformation/buy.gif")}  style={theme.Payment_style.clickGif} onPress={() => close()}></Image>
                                <TouchableOpacity>
                                    <Text style={theme.Payment_style.getItText} onPress={()=> close()} >Get It</Text>
                                </TouchableOpacity>
                            </View>
                        </Overlay>

                        <Overlay
                            animationType="slide"
                            transparent={true}
                            visible={modalvisible}
                            overlayStyle={{ borderRadius: 20 }}
                        >
                            <View style={theme.Payment_style.overLayContainer}>
                                <TouchableOpacity style={theme.Payment_style.successModal}>
                                    <Avatar rounded source={require('../Application/Assets/Payments/Conformation/success.gif')} size={200} />
                                    <Text style={theme.Payment_style.buyedText} onPress={()=> close()}>Buyed Successfully</Text>
                                </TouchableOpacity>
                            </View>
                        </Overlay>


                        <View style={theme.Payment_style.avatar}>
                            <Avatar size={60} rounded source={require("../Application/Assets/Payments/gpay.jpg")} onPress={() => setVisible(true)} />
                            <Avatar size={60} rounded source={require("../Application/Assets/Payments/paytm.jpg")} onPress={() => setVisible(true)} />
                            <Avatar size={60} rounded source={require("../Application/Assets/Payments/phonepay.jpg")} onPress={() => setVisible(true)} />
                        </View>
                    </View>
                )
            }
        </ThemeConsumer>
    )
}

export default Payment_page;