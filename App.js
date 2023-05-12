import React, { useState, useEffect } from "react";
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppContext from './Appcontext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from './Application/Splash';
import Sign_In_Up from './Application/Sign_in_up/Sign_In_Up';
import AboutUs from './Application/Sign_in_up/About_us';
import Main_Content from './Application/Main_Content';
import Book_Category from './Application/Books/Book_Category';
import Actions from './Application/Books/Action_Books';
import Horrer from './Application/Books/Horrer_Books';
import Suspense from './Application/Books/Suspense_Books';
import Mystery from './Application/Books/Mystery_Books';
import Comedy from './Application/Books/Comedy_Books';
import Love from './Application/Books/Love_Books';
import VoiceRecognition from './Application/Voice_Search';
import Favourite from './Application/Favourite';
import Profile from './Application/Profile';
import Payment_page from './Application/Payment';
import Book_Details from "./Application/Books/Book_Details";
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
                <Stack.Screen name='Main_Content' component={Main_Content} />
                <Stack.Screen name='Book_Category' component={Book_Category} />
                <Stack.Screen name='Actions' component={Actions} />
                <Stack.Screen name='Horrer' component={Horrer} />
                <Stack.Screen name='Suspense' component={Suspense} />
                <Stack.Screen name='Mystery' component={Mystery} />
                <Stack.Screen name='Comedy' component={Comedy} />
                <Stack.Screen name='Love' component={Love} />
                <Stack.Screen name='VoiceRecognition' component={VoiceRecognition} />
                <Stack.Screen name='Favourite' component={Favourite} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Payment_page' component={Payment_page} />
                <Stack.Screen name='Book_Details' component={Book_Details} />

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