import React, { useState, useEffect, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, Alert ,ToastAndroid} from "react-native";
import { ThemeConsumer } from "react-native-elements";
import AppContext from "../../Appcontext";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation()

  // Using useState and useContext for Updation/Storeing
  const { data, setData, setLogin, load } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState([])
  const [visible, setVisible] = useState(false)
  const [userFullData, setUserFullData] = useState([])
  const [userFullKey, setUserFullKey] = useState([])

  useEffect(() => {
    getData()
  }, [load])

  // Getting values from Firebase
  const getData = async () => {
    const res = await axios.get("https://book-2bceb-default-rtdb.firebaseio.com/books.json")
      .catch((err) => console.log("err", err))
    if (res != null) {
      setUserData(Object.values(res?.data))
      setUserFullKey(Object.keys(res.data))
      setUserFullData(res.data)
    }
  }
  // Storing values
  const onEmailChangeHandler = e => {
    setEmail(e)
  }
  const onPasswordChangeHandler = e => {
    setPassword(e)
  }
  // Validation of values from FireBase and User
  const onAddHandler = () => {
    userFullKey.map(res => {
      if (userFullData[res].Email === email) {
        AsyncStorage.setItem("userKey", res)
        setLogin(true)
        ToastAndroid.show(
          "Logined Successfully", ToastAndroid.BOTTOM,ToastAndroid.SHORT
        )
      }
    })

    let valid = false
    if (((email.length > 2))) {
      setData({ email: email, password: password })
      const uData = { email: email, password: password }
      userData.map(async (res) => {
        if (res.Email === uData.email && res.Password === uData.password) {
          valid = true
          await AsyncStorage.setItem('login', 'true')
          await AsyncStorage.setItem('user', JSON.stringify(uData))
          navigation.navigate('MainContents')
        }
      })
      if (!valid) {
        Alert.alert("Your Email id or Password is Incorrect", "Please Enter Vaild Email Address and Password")
      }
    }
    else {
      Alert.alert('Please enter deatils correctly', 'Your Details Cannot be Empty')
    }
  }

  // Main code execution 
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View style={theme.login.mainContainer}>
            <Image source={require("../Assets/book.gif")} style={theme.login.imgae}></Image>

            <View style={theme.login.container}>
              <Text style={theme.login.mainText} >Email Address 📧</Text>
              <TextInput
                style={theme.login.placeholderText}
                onChangeText={onEmailChangeHandler}
                autoCapitalize={"none"}
                keyboardType="email-address"
              />
              <Text style={theme.login.mainText}>Password 🔑</Text>
              <TextInput
                style={theme.login.placeholderText}
                onChangeText={onPasswordChangeHandler}
                secureTextEntry={!visible}
              />
              <Icon name={visible ? "eye" : "eye-slash"} size={25} style={theme.login.eyeIcon}
                onPress={() => { setVisible(!visible) }}
              />
              <Text style={theme.login.signupText} onPress={() => navigation.navigate("Register")}>Sign Up with us </Text>
            </View>

            <TouchableOpacity onPress={onAddHandler} style={theme.login.loginOpacity}>
              <Text style={theme.login.loginText}>Login 🔓</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")} style={theme.login.aboutContanier}>
              <Text style={theme.login.aboutText}>About Us !</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </ThemeConsumer>

  )
}

export default Login