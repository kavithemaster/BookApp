import React, { useContext } from "react";
import { View, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { Image, Text, ThemeConsumer } from "react-native-elements";
import AppContext from "../Appcontext";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Favourite = () => {

    const navigation = useNavigation()
    // Getting values by using useContext for favorite items
    const { favourite, setFavourite } = useContext(AppContext)

    // Removeing  From favourite list 
    const addtofavourite = item => {
        let data = [...favourite]
        let index = data.filter((i) => i.id != item.id)
        setFavourite(index)
    }

    // Main code of favourite items
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View>
                        <View style={{position:"absolute", backgroundColor:"white", flex:1}}>
                            <Image source={require("../Application/Assets/favorite.gif")} style={theme.favourite.favouriteGif} ></Image>
                            <Text style={theme.favourite.text}>You didn't add any Favourite Books please go back and add it</Text>
                        </View>
                        <View style={theme.favourite.maincontainer}>
                            <ScrollView>
                                {favourite.map(item => {
                                    return (
                                        <View key={item.id}>
                                            <TouchableOpacity onPress={() => navigation.navigate("BookDetails", item)}>
                                                <ImageBackground source={item.req} style={theme.favourite.image}>
                                                    <Icon name={"favorite"} size={37} style={theme.favourite.favouriteIcon}
                                                        onPress={() => addtofavourite(item)}
                                                    />
                                                </ImageBackground>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                )
            }
        </ThemeConsumer>
    )
}


export default Favourite