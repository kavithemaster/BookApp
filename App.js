import React, { useState, useEffect } from "react";
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppContext from './Appcontext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./Application/splash";
import Sign_In_Up from './Application/signInUp/signInUp';
import AboutUs from './Application/signInUp/aboutUs';
import MainContents from "./Application/mainContent";
import BookCategory from './Application/books/bookCategory';
import Actions from './Application/books/actionBooks';
import Horrer from './Application/books/horrerBooks';
import Suspense from './Application/books/suspenseBooks';
import Mystery from './Application/books/mysteryBooks';
import Comedy from './Application/books/comedyBooks';
import Love from './Application/books/loveBooks';
import VoiceRecognition from './Application/voiceSearch';
import Favourite from "./Application/favourite";
import Profile from './Application/profile';
import PaymentPage from "./Application/payment";
import BookDetails from "./Application/books/bookDetails";
import Theme from './Themes';

// Creating Stack Navigator
const Stack = createStackNavigator();

const App = () => {

  // Using of useState
  const [data, setData] = useState([])
  const [login, setLogin] = useState(false)
  const [splash, setSplash] = useState(true)
  const [favourite, setFavourite] = useState([])
  const [img, setImg] = useState('')
  const [search, setSearch] = useState('')
  const [load, setLoad] = useState(true)

  // Using set Time out for splash screen 
  useEffect(() => {
      get()
  }, [])

  // AsyncStorage Validation
  const get = async () => {
    let res
    let data

    try {
      res = await AsyncStorage.getItem('login')
      data = await AsyncStorage.getItem('user')
    } catch (err) {
      console.log(err)
    }

    if (data != null) {
      data = JSON.parse(data)
      setData({ ...data, email: data.email, password: data.password })
      setLogin(res)
    }
  }

  if (!splash) {
    return (

      // Providing (styles) for theme 
      // App Context code 
      <ThemeProvider theme={Theme}>
        <AppContext.Provider value={{
          data,
          setData,
          login,
          setLogin,
          favourite,
          setFavourite,
          source: img,
          setSource: setImg,
          search,
          setSearch,
          load,
          setLoad
        }}
        >
          {login ?
            <NavigationContainer >
              <Stack.Navigator
                screenOptions={{
                  header: () => null
                }}
              >
                <Stack.Screen name='mainContents' component={MainContents} />
                <Stack.Screen name='BookCategory' component={BookCategory} />
                <Stack.Screen name='Actions' component={Actions} />
                <Stack.Screen name='Horrer' component={Horrer} />
                <Stack.Screen name='Suspense' component={Suspense} />
                <Stack.Screen name='Mystery' component={Mystery} />
                <Stack.Screen name='Comedy' component={Comedy} />
                <Stack.Screen name='Love' component={Love} />
                <Stack.Screen name='VoiceRecognition' component={VoiceRecognition} />
                <Stack.Screen name='Favourite' component={Favourite} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='PaymentPage' component={PaymentPage} />
                <Stack.Screen name='BookDetails' component={BookDetails} />

              </Stack.Navigator>
            </NavigationContainer> : <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  header: () => null
                }}
              >
                <Stack.Screen name='Sign_In_Up' component={Sign_In_Up} />
              <Stack.Screen name='AboutUs' component={AboutUs} />
              </Stack.Navigator>
            </NavigationContainer>
          }
        </AppContext.Provider>
      </ThemeProvider>
    )
  }
  else {
    setTimeout(() => {
      setSplash(false)
    }, 3000);
    return (
      <ThemeProvider theme={Theme}>
        <Splash />
      </ThemeProvider>
    )
  }
}

export default App