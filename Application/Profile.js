import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Alert, Modal, TextInput ,ToastAndroid} from "react-native";
import { ThemeConsumer } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../Appcontext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

const validation = Yup.object({
    UserName: Yup
        .string()
        .trim()
        .min(3, 'Invalid Name!')
        .required('User Name is Required'),
    PhoneNumber: Yup
        .string()
        .matches(/(\d){10}\b/, 'Enter the valid Mobile number')
        .matches('^[6-9][0-9]*$', 'Enter the valid  number')
        .max(10, 'Invalid Number')
        .required('Phone number is required'),
})

const Profile = () => {
    const navigation = useNavigation()
    const [visibility, setVisibility] = useState(false)
    const [settingsModal, setSettingsModal] = useState(false)
    useEffect(() => {
        getUSerData()
    }, [])
    const [userData, setUserData] = useState([])
    const getUSerData = async () => {
        let key = await AsyncStorage.getItem("userKey")
        const res = await axios.get(`https://book-2bceb-default-rtdb.firebaseio.com/books/${key}.json`)
        setUserData(res.data);
    }
    // Getting Values from useConntext to dislplay user details
    const { setLogin } = useContext(AppContext)

    const onAddHandler = async (values) => {
        const data = { ...values, Password: userData.Password, ConformPassword: userData.ConformPassword }
        const key = await AsyncStorage.getItem("userKey")
        const res = await axios.put(`https://book-2bceb-default-rtdb.firebaseio.com/books/${key}.json`, data)
        // getUSerData()
        setUserData(res.data);
        setVisibility(false)
        ToastAndroid.show(
            'Edited Successfully', ToastAndroid.BOTTOM, ToastAndroid.SHORT
        )

    }
    // Main Code Execution 
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.Profile_Styles.mainContainer}>
                        <View>
                            <Icon name="settings" size={30} style={theme.Profile_Styles.settingIcon} onPress={() => setSettingsModal(true)}></Icon>
                            <Text style={theme.Profile_Styles.myAccountText}>My Account</Text>
                        </View>
                        <TouchableOpacity>
                        </TouchableOpacity>
                        <View style={theme.Profile_Styles.container}>
                            <Text style={theme.Profile_Styles.mainText} >Email Address : {userData && userData.Email} </Text>
                            <Text style={theme.Profile_Styles.mainText} >User Name: {userData && userData.UserName} </Text>
                            <Text style={theme.Profile_Styles.mainText} >Phone Number : {userData && userData.PhoneNumber} </Text>
                            <TouchableOpacity style={theme.Profile_Styles.logoutMainContainer}
                                // AsyncStorage code validated for logout
                                onPress={() => {
                                    Alert.alert('Alert', 'Are you Sure want to Logout ', [
                                        {
                                            text: 'No',
                                            onPress: () => { navigation.navigate("Profile")},

                                        },
                                        {
                                            text: 'Yes',
                                            onPress: async () => {
                                                await AsyncStorage.clear()
                                                setLogin(false)
                                                ToastAndroid.show(
                                                    'Logout Successfully', ToastAndroid.BOTTOM, ToastAndroid.SHORT
                                                )
                                            }
                                        },

                                    ])
                                }}
                            >
                                <Text style={theme.Profile_Styles.logoutText}>Logout</Text>
                            </TouchableOpacity>

                        </View>
                        <Modal
                            visible={visibility}
                            transparent={true}
                            animationType="fade"
                        >
                            <Formik validationSchema={validation} initialValues={{ PhoneNumber: userData && userData.PhoneNumber, Email: userData && userData.Email, UserName: userData && userData.UserName }} onSubmit={(values) => onAddHandler(values)} >
                                {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => {
                                    return (
                                        <View style={theme.Profile_Styles.formikMainContainer}>
                                            <Text style={theme.Profile_Styles.text}> User Name  </Text>
                                            <TextInput
                                                placeholder="User Name"
                                                style={theme.Profile_Styles.placeholderText}
                                                onChangeText={handleChange("UserName")}
                                                value={values.UserName}
                                                onBlur={handleBlur("UserName")}
                                            />
                                            {errors ? (<Text style={theme.Profile_Styles.errorText}>{touched.UserName && errors.UserName}</Text>) : null}

                                            <Text style={theme.Profile_Styles.text}> Phone Number </Text>
                                            <TextInput
                                                placeholder="Phone Number"
                                                style={theme.Profile_Styles.placeholderText}
                                                onChangeText={handleChange("PhoneNumber")}
                                                value={values.PhoneNumber}
                                                keyboardType="numeric"
                                                onBlur={handleBlur("PhoneNumber")}
                                            />
                                            {errors ? (<Text style={theme.Profile_Styles.errorText}>{touched.PhoneNumber && errors.PhoneNumber}</Text>) : null}
                                            <TouchableOpacity style={theme.Profile_Styles.submitButton}>
                                                <Text style={theme.Profile_Styles.submitText} onPress={handleSubmit}>Submit</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={theme.Profile_Styles.close}>
                                                <Text style={theme.Profile_Styles.submitText} onPress={() => setVisibility(false)}>Close</Text>
                                            </TouchableOpacity>

                                        </View>
                                    )
                                }}

                            </Formik>

                        </Modal>

                        <Modal
                            transparent={true}
                            animationType="fade"
                            visible={settingsModal}
                            onRequestClose={() => console.log("str")}
                        >
                            <View style={theme.Profile_Styles.settingModal}>
                                <Text style={theme.Profile_Styles.settingModalText} onPress={() => { setVisibility(true), setSettingsModal(false) }}>Edit Your Profile</Text>
                                <Text style={theme.Profile_Styles.settingModalText} onPress={() => setSettingsModal(false)}>Close</Text>


                            </View>

                        </Modal>
                    </View>
                )
            }
        </ThemeConsumer>
    )
}

export default Profile