import React, { useEffect, useState, useContext } from "react";
import { SearchBar, ThemeConsumer } from "react-native-elements";
import { View, Text, VirtualizedList, ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Rating } from 'react-native-ratings';
import Icon from "react-native-vector-icons/MaterialIcons";
import AppContext from "../../Appcontext";
import VoiceRecognition from "../Voice_Search";

const Horrer = () => {

    const navigation = useNavigation()
    // Storing values in useState and useContext
    const { favourite, setFavourite, search, setSearch } = useContext(AppContext)
    const [cardItem, setCardItem] = useState([])
    // Array of Datas code 
    const items = [
        {
            id: 6,
            name: 'Dark_Matter ',
            req: require("../Assets/Horrer/Dark_Matter.jpg"),
            amount: 3404,
            content:"Horror is a genre of literature, film, and television that is meant to scare, startle, shock, and even repulse audiences. The key focus of a horror novel, horror film, or horror TV show is to elicit a sense of dread in the reader through frightening images, themes, and situations",
        },
        {
            id: 7,
            name: 'Dracula ',
            req: require("../Assets/Horrer/Dracula.jpg"),
            amount: 1564,
            content:"Horror is a genre of literature, film, and television that is meant to scare, startle, shock, and even repulse audiences. The key focus of a horror novel, horror film, or horror TV show is to elicit a sense of dread in the reader through frightening images, themes, and situations",
        },
        {
            id: 8,
            name: 'It',
            req: require("../Assets/Horrer/It.jpg"),
            amount: 136,
            content:"Horror is a genre of literature, film, and television that is meant to scare, startle, shock, and even repulse audiences. The key focus of a horror novel, horror film, or horror TV show is to elicit a sense of dread in the reader through frightening images, themes, and situations",
        },
        {
            id: 9,
            name: 'Misery',
            req: require("../Assets/Horrer/Misery.jpg"),
            amount: 294,
            content:"Horror is a genre of literature, film, and television that is meant to scare, startle, shock, and even repulse audiences. The key focus of a horror novel, horror film, or horror TV show is to elicit a sense of dread in the reader through frightening images, themes, and situations",
        },
        {
            id: 10,
            name: 'The_Hunger',
            req: require("../Assets/Horrer/The_Hunger.jpg"),
            amount: 364,
            content:"Horror is a genre of literature, film, and television that is meant to scare, startle, shock, and even repulse audiences. The key focus of a horror novel, horror film, or horror TV show is to elicit a sense of dread in the reader through frightening images, themes, and situations",
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
                    <View style={theme.Horrer_Book_style.mainPage}>
                        <Icon name="navigate-before" size={50} style={theme.Horrer_Book_style.navigate_before_icon} onPress={() => navigation.goBack()}></Icon>
                        <View style={theme.Horrer_Book_style.keyboard_voice_icon}>
                            <VoiceRecognition />
                        </View>

                        <SearchBar
                            containerStyle={theme.Horrer_Book_style.SearchBar_style}
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
                                            <View style={theme.Horrer_Book_style.mainContainer}>
                                                <TouchableOpacity onPress={() => navigation.navigate("Book_Details",item)}>
                                                    <ImageBackground source={item.req}
                                                        style={theme.Horrer_Book_style.Image_style} >
                                                        <Icon name={item.favourite ? "favorite" : "favorite-border"} size={42} style={theme.Action_Book_Styles.Fav_Style}
                                                            onPress={() => { item.favourite = !item.favourite, addtofavourite(item) }} />
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                                <Text style={theme.Action_Book_Styles.amount_style}>{[item.name, ("        Rs."), item.amount]}</Text>
                                                <Rating
                                                   type='star'
                                                   ratingCount={5}
                                                   imageSize={30}
                                                   startingValue={4.2}
                                                   tintColor="lightblue"
                                                   fractions={2}
                                                   showRating={true}
                                                   ratingTextColor="red"
                                                    style={theme.Horrer_Book_style.rating}
                                                />
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



export default Horrer