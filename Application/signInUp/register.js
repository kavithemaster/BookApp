import React, { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, ToastAndroid } from "react-native";
import { ThemeConsumer } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../Appcontext";

// Yup Validation code 
const validation = Yup.object({
  Email: Yup
    .string()
    .email('Invalid email')
    .required('Email ID is Required'),
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
  Password: Yup
    .string()
    .trim()
    .min(8, ({ min }) => `password must be at least ${min} characters`)
    .max(20, ({ max }) => `password must be at least ${max} characters`)
    .required('Password is required'),
  ConformPassword: Yup
    .string()
    .equals([Yup.ref('Password'), null], 'Password doesnt match')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(20, ({ max }) => `Password must be at least ${max} characters`)
    .required('Conform Password is Required'),
})


const Register = () => {
  const { setLoad, load } = useContext(AppContext)

  const navigation = useNavigation()
  // Posting user data values to firebase 
  const onAddHandler = async (values) => {
    const res = await axios.post("https://book-2bceb-default-rtdb.firebaseio.com/books.json", values)
    setLoad(!load)
    navigation.goBack()

    ToastAndroid.show(
      "Registred Successfully", ToastAndroid.BOTTOM, ToastAndroid.SHORT
    )
  }

  // useState for password visibility
  const [visible, setVisible] = useState(false)
  const [anotherVisible, setAnotherVisible] = useState(false)

  const Details = {
    Email: "",
    UserName: "",
    PhoneNumber: "",
    Password: "",
    ConformPassword: "",
  }

  // Main Code execution using Formik 
  return (
    <View>
      <Formik validationSchema={validation} initialValues={Details} onSubmit={(values) => onAddHandler(values)}>
        {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => {
          const { Email, UserName, PhoneNumber, Password, ConformPassword } = values
          return (
            <ThemeConsumer>
              {
                ({ theme }) => (
                  <View style={theme.register.mainContainer}>
                    <Image source={require("../Assets/book.gif")} style={theme.register.gif} ></Image>
                    <ScrollView>
                      <View style={theme.register.container}>
                        <View style={theme.register.inputContainer}>
                          <Text style={theme.register.mainText}>Email Address</Text>
                          <TextInput
                            style={theme.register.placeholderText}
                            onChangeText={handleChange("Email")}
                            value={Email}
                            keyboardType="email-address"
                            autoCapitalize={"none"}
                            onBlur={handleBlur("Email")}
                          />
                          {errors ? (
                            <Text style={theme.register.errorText}>{touched.Email && errors.Email}</Text>
                          ) : null}
                          <Text style={theme.register.mainText}>User Name</Text>
                          <TextInput
                            style={theme.register.placeholderText}
                            onChangeText={handleChange("UserName")}
                            value={UserName}
                            onBlur={handleBlur("UserName")}
                          />
                          {errors ? (
                            <Text style={theme.register.errorText}>{touched.UserName && errors.UserName}</Text>
                          ) : null}
                          <Text style={theme.register.mainText}>Phone Number</Text>
                          <TextInput
                            style={theme.register.placeholderText}
                            onChangeText={handleChange("PhoneNumber")}
                            value={PhoneNumber}
                            keyboardType="numeric"
                            onBlur={handleBlur("PhoneNumber")}
                          />
                          {errors ? (
                            <Text style={theme.register.errorText}>{touched.PhoneNumber && errors.PhoneNumber}</Text>
                          ) : null}
                          <Text style={theme.register.mainText}>Password</Text>
                          <TextInput
                            style={theme.register.placeholderText}
                            secureTextEntry={!visible}
                            onChangeText={handleChange("Password")}
                            value={Password}
                            onBlur={handleBlur("Password")}
                          />
                          <Icon name={visible ? "eye" : "eye-slash"} size={25} style={theme.register.eyeIcon}
                            onPress={() => { setVisible(!visible) }}
                          />
                          {errors ? (
                            <Text style={theme.register.errorText}>{touched.Password && errors.Password}</Text>
                          ) : null}
                          <Text style={theme.register.mainText}>Conform Password</Text>
                          <TextInput
                            style={theme.register.placeholderText}
                            onChangeText={handleChange("ConformPassword")}
                            value={ConformPassword}
                            secureTextEntry={!anotherVisible}
                            onBlur={handleBlur("ConformPassword")}
                          />
                          <Icon name={anotherVisible ? "eye" : "eye-slash"} size={25} style={theme.register.eyeIcon1}
                            onPress={() => { setAnotherVisible(!anotherVisible) }}
                          />
                          {errors ? (
                            <Text style={theme.register.errorText}>{touched.ConformPassword && errors.ConformPassword}</Text>
                          ) : null}
                          <TouchableOpacity onPress={handleSubmit} style={theme.register.registerOpacity} >
                            <Text style={theme.register.registerText}>
                              Register 🗂️
                            </Text>
                          </TouchableOpacity>
                          <Image source={require('../Assets/Register_images/google.jpg')} style={theme.register.googleImage}></Image>
                          <Image source={require('../Assets/Register_images/Facebook.jpg')} style={theme.register.faceBookImage}></Image>
                          <Image source={require('../Assets/Register_images/Microsoft.jpg')} style={theme.register.microsoftImage}></Image>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                )
              }
            </ThemeConsumer>
          )
        }}
      </Formik>
    </View>
  )
}

export default Register