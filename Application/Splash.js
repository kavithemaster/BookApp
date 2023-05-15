import React from "react";
import { ImageBackground, View } from "react-native";
import { ThemeConsumer } from "react-native-elements";

const Splash = () => {
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <View style={theme.splash.mainContainer}>
            <ImageBackground source={require("../Application/Assets/man.gif")} style={theme.splash.image}>
            </ImageBackground>
          </View>
        )
      }
    </ThemeConsumer>

  )
}



export default Splash