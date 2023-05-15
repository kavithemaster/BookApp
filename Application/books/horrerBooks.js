import React, { useEffect, useState, useContext } from "react";
import { SearchBar, ThemeConsumer } from "react-native-elements";
import { View, Text, VirtualizedList, ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Rating } from 'react-native-ratings';
import Icon from "react-native-vector-icons/MaterialIcons";
import AppContext from "../../Appcontext";
import VoiceRecognition from "../voiceSearch";

const Horrer = () => {

    const navigation = useNavigation()
    // Storing values in useState and useContext
    const { favourite, setFavourite, search, setSearch } = useContext(AppContext)
    const [cardItem, setCardItem] = useState([])
    // Array of Datas code 
    const items = [
        {
            id: 6,
            name: 'Dark Matter ',
            req: require("../Assets/Horrer/Dark_Matter.jpg"),
            amount: 3404,
            content:"Dark Matter is the story of Jason Dessen, an intensely devoted family man with a lackluster career. One day he's abducted by a mysterious stranger, and every assumption he'd had about his life is yanked away. He finds himself in a disorienting world both similar and different from his real life.",
        },
        {
            id: 7,
            name: 'Dracula ',
            req: require("../Assets/Horrer/Dracula.jpg"),
            amount: 1564,
            content:"Stoker likely found the name Dracula in Whitby's public library while holidaying there with his wife and son in 1880. On the name, Stoker wrote: Dracula means devil. Wallachians were accustomed to give it as a surname to any person who rendered himself conspicuous by courage, cruel actions or cunning",
        },
        {
            id: 8,
            name: 'It',
            req: require("../Assets/Horrer/It.jpg"),
            amount: 136,
            content:"It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.",
        },
        {
            id: 9,
            name: 'Misery',
            req: require("../Assets/Horrer/Misery.jpg"),
            amount: 294,
            content:"Misery explores Stephen King's own experiences with writer's block, drug addiction, and feeling stifled by his reputation as a writer of horror novels.",
        },
        {
            id: 10,
            name: 'The Hunger',
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
                    <View style={theme.horrerBook.mainPage}>
                        <Icon name="navigate-before" size={50} style={theme.horrerBook.navigateBeforeIcon} onPress={() => navigation.goBack()}></Icon>
                        <View style={theme.horrerBook.keyboardVoiceIcon}>
                            <VoiceRecognition />
                        </View>
                        <SearchBar
                            containerStyle={theme.horrerBook.searchBarStyle}
                            lightTheme
                            placeholder="Search Here"
                            placeholderTextColor="black"
                            round
                            value={search}
                            onChangeText={e => setSearch(e)}
                            inputStyle={theme.horrerBook.searchBarInput}

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
                                            <View style={theme.horrerBook.mainContainer}>
                                                <TouchableOpacity onPress={() => navigation.navigate("BookDetails", item)}>
                                                    <ImageBackground source={item.req} style={theme.horrerBook.imageStyle}  >
                                                        <Icon name={item.favourite ? "favorite" : "favorite-border"} size={42} style={theme.horrerBook.favouriteStyle}
                                                            onPress={() => { item.favourite = !item.favourite, addtofavourite(item) }} />
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                                <Text style={theme.horrerBook.amountStyle}>{[item.name, ("        Rs."), item.amount]}</Text>
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
                                                        style={theme.horrerBook.rating}
                                                        
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



export default Horrer