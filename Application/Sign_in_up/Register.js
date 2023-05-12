import React, {useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView ,ToastAndroid} from "react-native";
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
  const {setLoad, load} = useContext(AppContext)

  const navigation = useNavigation()
  // Posting user data values to firebase 
  const onAddHandler = async (values) => {
    const res = await axios.post("https://book-2bceb-default-rtdb.firebaseio.com/books.json", values) 
    setLoad(!load)   
    navigation.goBack()
    
    ToastAndroid.show(
      "Registred Successfully", ToastAndroid.BOTTOM,ToastAndroid.SHORT
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
                  <View style={theme.Register_styles.mainContainer}>
                    <Image source={require("../Assets/book.gif")} style={theme.Register_styles.gif_style} ></Image>
                    <ScrollView>
                      <View style={theme.Register_styles.container}>
                        <View style={theme.Register_styles.input_container}>
                          <Text style={theme.Register_styles.main_text}>Email Address</Text>
                          <TextInput
                            style={theme.Register_styles.placeholder_text}
                            onChangeText={handleChange("Email")}
                            value={Email}
                            keyboardType="email-address"
                            onBlur={handleBlur("Email")}
                          />
                          {errors ? (
                            <Text style={theme.Register_styles.error_text}>{touched.Email && errors.Email}</Text>
                          ) : null}
                          <Text style={theme.Register_styles.main_text}>User Name</Text>
                          <TextInput
                            style={theme.Register_styles.placeholder_text}
                            onChangeText={handleChange("UserName")}
                            value={UserName}
                            onBlur={handleBlur("UserName")}
                          />
                          {errors ? (
                            <Text style={theme.Register_styles.error_text}>{touched.UserName && errors.UserName}</Text>
                          ) : null}
                          <Text style={theme.Register_styles.main_text}>Phone Number</Text>
                          <TextInput
                            style={theme.Register_styles.placeholder_text}
                            onChangeText={handleChange("PhoneNumber")}
                            value={PhoneNumber}
                            keyboardType="numeric"
                            onBlur={handleBlur("PhoneNumber")}
                          />
                          {errors ? (
                            <Text style={theme.Register_styles.error_text}>{touched.PhoneNumber && errors.PhoneNumber}</Text>
                          ) : null}
                          <Text style={theme.Register_styles.main_text}>Password</Text>
                          <TextInput
                            style={theme.Register_styles.placeholder_text}
                            secureTextEntry={!visible}
                            onChangeText={handleChange("Password")}
                            value={Password}
                            onBlur={handleBlur("Password")}
                          />
                          <Icon name={visible ? "eye" : "eye-slash"} size={25} style={theme.Register_styles.eye_icon}
                            onPress={() => { setVisible(!visible) }}
                          />
                          {errors ? (
                            <Text style={theme.Register_styles.error_text}>{touched.Password && errors.Password}</Text>
                          ) : null}
                          <Text style={theme.Register_styles.main_text}>Conform Password</Text>
                          <TextInput
                            style={theme.Register_styles.placeholder_text}
                            onChangeText={handleChange("ConformPassword")}
                            value={ConformPassword}
                            secureTextEntry={!anotherVisible}
                            onBlur={handleBlur("ConformPassword")}
                          />
                          <Icon name={anotherVisible ? "eye" : "eye-slash"} size={25} style={theme.Register_styles.eye_icon1}
                            onPress={() => { setAnotherVisible(!anotherVisible) }}
                          />
                          {errors ? (
                            <Text style={theme.Register_styles.error_text}>{touched.ConformPassword && errors.ConformPassword}</Text>
                          ) : null}
                          <TouchableOpacity onPress={handleSubmit} style={theme.Register_styles.register_opacity} >
                            <Text style={theme.Register_styles.register_text}>
                              Register 🗂️
                            </Text>
                          </TouchableOpacity>
                          <Image source={require('../Assets/Register_images/google.jpg')} style={theme.Register_styles.google_image_style}></Image>
                          <Image source={require('../Assets/Register_images/Facebook.jpg')} style={theme.Register_styles.FaceBook_image_style}></Image>
                          <Image source={require('../Assets/Register_images/Microsoft.jpg')} style={theme.Register_styles.Microsoft_image_style}></Image>
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