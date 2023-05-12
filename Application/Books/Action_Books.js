import React, { useEffect, useState, useContext } from "react";
import { SearchBar, ThemeConsumer } from "react-native-elements";
import { View, Text, VirtualizedList, ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Rating } from 'react-native-ratings';
import Icon from "react-native-vector-icons/MaterialIcons";
import AppContext from "../../Appcontext";
import VoiceRecognition from "../Voice_Search";

const Actions = () => {
    const navigation = useNavigation()
    // Storing values in useState and useContext
    const { favourite, setFavourite, search, setSearch } = useContext(AppContext)
    const [cardItem, setCardItem] = useState([])
    // Array of Datas code 
    const items = [
        {
            id: 1,
            subscribed: false,
            name: 'Azarinth_Healer ',
            req: require("../Assets/Actions/Azarinth_Healer.jpg"),
            amount: 390,
            content: "Action books are often very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories Action books are often very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories",
        },
        {
            id: 2,
            ubscribed: false,
            name: 'The_Instructor ',
            req: require("../Assets/Actions/The_Instructor.jpg"),
            amount: 250,
            content: "Books are often very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories Action books are often very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories",
        },
        {
            id: 3,
            ubscribed: false,
            name: 'The_King_of_Drugs',
            req: require("../Assets/Actions/The_King_of_Drugs.jpg"),
            amount: 990,
            content: "This are often very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories Action books are often very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories",

        },
        {
            id: 4,
            ubscribed: false,
            name: 'Misery',
            req: require("../Assets/Horrer/Misery.jpg"),
            amount: 564,
            content: "It is very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories Action books are often very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories",
        },
        {
            id: 5,
            name: 'The_Hunger',
            ubscribed: false,
            req: require("../Assets/Horrer/The_Hunger.jpg"),
            amount: 3760,
            content: "Danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories Action books are often very heavy on the plot with danger pulling the story forward, leaving readers on the edge of their seat desperate to know what happens next. Elements of risk and surprise are key factors in action stories",
        },
    ]

    // Displaying datas by order of need
    useEffect(() => {
        let arr = [];
        for (i = 0; i < 2; i++) {
            arr.push(items[i]);
        }
        setCardItem([...arr]);
    }, []);



    const onEndReached = () => {
        let newArr = [];
        for (i = 0; i < 1; i++) {
            newArr.push(items[cardItem.length + i]);
        }
        setCardItem(prev => {
            return [...prev, ...newArr];
        });
    };


    const getItem = (items, index) => {
        return items[index]
    }

    // Code for Adding Favourite
    const addtofavourite = item => {
        let data = [...favourite]
        let index = data.findIndex(i => item.id == i.id)
        if (index > -1) {
            data[index]
        }
        else {
            data.push(item)
        }
        setFavourite(data)
    }
    // render code for empty search bar
    useEffect(() => {
        setSearch('')
    }, [])

    return (
        // Main code execution
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.Action_Book_Styles.mainPage}>
                        <Icon name="navigate-before" size={50} style={theme.Action_Book_Styles.navigate_before_icon} onPress={() => navigation.goBack()}></Icon>
                        <View style={theme.Action_Book_Styles.keyboard_voice_icon}>
                            <VoiceRecognition />
                        </View>
                        <SearchBar
                            containerStyle={theme.Action_Book_Styles.SearchBar_style}
                            lightTheme
                            placeholder="Search Here"
                            placeholderTextColor="black"
                            round
                            value={search}
                            onChangeText={e => setSearch(e)}
                            inputStyle={theme.Action_Book_Styles.SearchBar_input}

                        >
                        </SearchBar>
                        <VirtualizedList
                            getItemCount={items => items.length}
                            keyExtractor={(item, index) => index}
                            getItem={getItem}
                            onEndReached={onEndReached}
                            onEndReachedThreshold={0.01}
                            ListFooterComponent={<ActivityIndicator size={60} />
                            }
                            ListFooterComponentStyle={{ marginBottom: '15%' }}
                            data={cardItem}
                            renderItem={({ item }) => {
                                let val = search?.toLowerCase().replace(/\s/, '');
                                let newVal = item?.name?.toLowerCase().replace(/\s/, '');
                                if (newVal?.includes(val)) {
                                    return (
                                        item != null ?
                                            <View style={theme.Action_Book_Styles.mainContainer}>
                                                <TouchableOpacity onPress={() => navigation.navigate("Book_Details", item)}>
                                                    <ImageBackground source={item.req} style={theme.Action_Book_Styles.Image_style}  >
                                                        <Icon name={item.favourite ? "favorite" : "favorite-border"} size={42} style={theme.Action_Book_Styles.Fav_Style}
                                                            onPress={() => { item.favourite = !item.favourite, addtofavourite(item) }} />
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                                <Text style={theme.Action_Book_Styles.amount_style}>{[item.name, ("        Rs."), item.amount]}</Text>
                                                <View>
                                                    <Rating
                                                        type='star'
                                                        ratingCount={5}
                                                        imageSize={30}
                                                        startingValue={4.2}
                                                        tintColor="lightblue"
                                                        fractions={2}
                                                        showRating={true}
                                                        ratingTextColor="red"
                                                        style={theme.Action_Book_Styles.rating}
                                                        
                                                    />
                                                </View>
                                            </View>
                                            : null)
                                }
                            }}
                        />
                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default Actions