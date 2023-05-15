import React, { useEffect, useState, useContext } from "react";
import { SearchBar, ThemeConsumer } from "react-native-elements";
import { View, Text, VirtualizedList, ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Rating } from 'react-native-ratings';
import Icon from "react-native-vector-icons/MaterialIcons";
import AppContext from "../../Appcontext";
import VoiceRecognition from "../Voice_Search";

const Mystery = () => {
    const navigation = useNavigation()
    // Storing values in useState and useContext
    const { favourite, setFavourite, search, setSearch } = useContext(AppContext)
    const [cardItem, setCardItem] = useState([])
    // Array of Datas code 
    const items = [
        {
            id: 11,
            name: 'The Half Death ',
            req: require("../Assets/Mystery/The_Half_Death.jpg"),
            amount: 344,
            content:"From the author of Prema Naada Pandita comes this double murder mystery novel, which is the first part in the Dark Death Nirvana series by SB Akshobhya.  This tantalizing thriller is bound to send chills down the spine of even the most avid readers and thus can be called a truly engrossing, eye-popping, and jaw-dropping crime thriller.",
        },
        {
            id: 12,
            name: 'The Outsider ',
            req: require("../Assets/Mystery/The_Outsider.jpg"),
            amount: 564,
            content:"The Outsiders is about two weeks in the life of a 14-year-old boy. The novel tells the story of Ponyboy Curtis and his struggles with right and wrong in a society in which he believes that he is an outsider. According to Ponyboy, there are two kinds of people in the world: greasers and socs.",
        },
        {
            id: 13,
            name: 'The Hunger',
            req: require("../Assets/Horrer/The_Hunger.jpg"),
            amount: 2364,
            content:"The Hunger retells the infamous story of the Donner Party, with a supernatural twist. The Donner-Reed party was a group of pioneers traveling west to California who were stuck in what became known as Donner Pass in the winter of 1846.",
        },
        {
            id: 14,
            name: 'Mystery Main',
            req: require("../Assets/Mystery/Mystery_main.jpg"),
            amount: 864,
            content:"Night time is the right time Gwendolyn Kidd has met the man of her dreams. He's hot, he's sexy, and what started as a no-names-exchanged night of passion has blossomed into a year and a half-long pleasure fest. Sure, it's a little strange that he only appears in her bed at night, but Gwen is so sure he's the one, she just can't turn him away...",
        },
        {
            id: 15,
            name: 'The Hunger',
            req: require("../Assets/Horrer/The_Hunger.jpg"),
            amount: 1064,
            content:"Mystery is a genre of literature, film, and television that is meant to scare, startle, shock, and even repulse audiences. The key focus of a horror novel, horror film, or horror TV show is to elicit a sense of dread in the reader through frightening images, themes, and situations",
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
                    <View style={theme.Mystery_Book_Styles.mainPage}>
                    <Icon name="navigate-before" size={50} style={theme.Mystery_Book_Styles.navigateBeforeIcon} onPress={() => navigation.goBack()}></Icon>
                    <View style={theme.Mystery_Book_Styles.keyboardVoiceIcon}>
                        <VoiceRecognition />
                    </View>
                    <SearchBar
                        containerStyle={theme.Mystery_Book_Styles.searchBarStyle}
                        lightTheme
                        placeholder="Search Here"
                        placeholderTextColor="black"
                        round
                        value={search}
                        onChangeText={e => setSearch(e)}
                        inputStyle={theme.Mystery_Book_Styles.searchBarInput}

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
                                        <View style={theme.Mystery_Book_Styles.mainContainer}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Book_Details", item)}>
                                                <ImageBackground source={item.req} style={theme.Mystery_Book_Styles.imageStyle}  >
                                                    <Icon name={item.favourite ? "favorite" : "favorite-border"} size={42} style={theme.Mystery_Book_Styles.favouriteStyle}
                                                        onPress={() => { item.favourite = !item.favourite, addtofavourite(item) }} />
                                                </ImageBackground>
                                            </TouchableOpacity>
                                            <Text style={theme.Mystery_Book_Styles.amountStyle}>{[item.name, ("        Rs."), item.amount]}</Text>
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
                                                    style={theme.Mystery_Book_Styles.rating}
                                                    
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


export default Mystery