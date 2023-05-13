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
            name: 'Azarinth Healer',
            req: require("../Assets/Actions/Azarinth_Healer.jpg"),
            amount: 390,
            content: "Real name G. Harthane. The author of Azarinth Healer. Posts chapters to Royal Road and Patreon, with the paying customers on Patreon being about 20 chapters ahead of the free publications on Royal Road at any given time.Keyaru (ケヤル), also known as Keyaruga (ケヤルガ), is the main protagonist of Redo of Healer. On his 14th birthday, he was chosen as one of the Heroes, the Hero of Healing. After years of torture at the hands of his allies, he manages to break free and get the Philosopher's Stone",
        },
        {
            id: 2,
            ubscribed: false,
            name: 'The Instructor ',
            req: require("../Assets/Actions/The_Instructor.jpg"),
            amount: 250,
            content: "Derek Harrington is a terrific new hero, a former Marine and wilderness survival expert who finds himself in a battle of wits against both a determined enemy and nature itself. Packed with action, tension, and humanity, The Instructor delivers. T. R. HENDRICKS is a former United States Army Captain who served as a tank platoon leader, and then as a military intelligence officer, where he was an advisor to the Iraqi Ministry of Interior's National Information and Intelligence Agency. When not working or writing in his home in Upstate New York, Hendricks is most likely reading, woodworking, or watching his beloved San Francisco 49ers. The Instructor is his first novel.",
        },
        {
            id: 3,
            ubscribed: false,
            name: 'The King of Drugs',
            req: require("../Assets/Actions/The_King_of_Drugs.jpg"),
            amount: 990,
            content: "This is the story of the most successful cocaine dealers in the world: Pablo Escobar Gaviria, Jorge Luis Ochoa Vasquez, Carlos Lehder Rivas and Jose Gonzalo Rodriguez Gacha. In the 1980s they controlled more than fifty percent of the cocaine flowing into the United States. The cocaine trade is capitalism on overdrive -- supply meeting demand on exponential levels. Here you'll find the story of how the modern cocaine business started and how it turned a rag tag group of hippies and sociopaths into regal kings as they stumbled from small-time suitcase smuggling to levels of unimaginable sophistication and daring. The $2 billion dollar system eventually became so complex that it required the manipulation of world leaders, corruption of revolutionary movements and the worst kind of violence to protect.",

        },
        {
            id: 4,
            ubscribed: false,
            name: 'Misery',
            req: require("../Assets/Horrer/Misery.jpg"),
            amount: 564,
            content: "Misery explores Stephen King's own experiences with writer's block, drug addiction, and feeling stifled by his reputation as a writer of horror novels.It is a book in which addiction is explored in multiple forms by both characters, and it is also a book about the nature of addiction, written by a man familiar with the concept. King wrote Misery about cocaine addiction specifically: “Misery is a book about cocaine. Annie Wilkes is cocaine",
        },
        {
            id: 5,
            name: 'The Hunger',
            ubscribed: false,
            req: require("../Assets/Horrer/The_Hunger.jpg"),
            amount: 3760,
            content: "The Hunger retells the infamous story of the Donner Party, with a supernatural twist. The Donner-Reed party was a group of pioneers traveling west to California who were stuck in what became known as Donner Pass in the winter of 1846.The novel is unusual in that it deals with the practical considerations of vampirism, such as the difficulty in obtaining victims and concealing frequent murders.",
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