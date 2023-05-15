import React from 'react';
import { FlatList, ImageBackground, TouchableOpacity, View } from "react-native"
import { Text, ThemeConsumer } from "react-native-elements"
import { useNavigation } from "@react-navigation/native";

const Book_Category = () => {
    const navigation = useNavigation()
    // Array of Datas 
    const items = [
        {
            id: 1,
            name: 'Actions ',
            req: require("../Assets/Actions/Action_main.jpg"),
            action: "Actions",
        },
        {
            id: 2,
            name: 'Comedy',
            req: require("../Assets/Comedy/comedy_main.jpg"),
            action: "Comedy",
        },
        {
            id: 3,
            name: 'Mystery',
            req: require("../Assets/Mystery/Mystery_main.jpg"),
            action: "Mystery",
        },
        {
            id: 4,
            name: 'Suspence',
            req: require("../Assets/Suspence/Suspence_main.jpg"),
            action: "Suspense",
        },
        {
            id: 5,
            name: 'Horrer ',
            req: require("../Assets/Horrer/horrer_main.jpg"),
            action: "Horrer",
        },
        {
            id: 6,
            name: 'Love',
            req: require("../Assets/Love/Love_main.jpg"),
            action: "Love",
        },
    ]
  
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    // Main code execution by using FlatList
                    <View >
                        <FlatList
                            data={items}
                            renderItem={({ item }) =>
                                <View style={theme.Book_Page_styles.mainContainer}>
                                    <Text style={theme.Book_Page_styles.text} onPress={()=> navigation.navigate(item.action)}>{item.name}</Text>
                                    <ImageBackground source={item.req} style={theme.Book_Page_styles.image}>
                                        <TouchableOpacity style={theme.Book_Page_styles.opacity} onPress={() => navigation.navigate(item.action)}>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            }
                            keyExtractor={item => item.id}
                            numColumns={2}
                            key={item => item.id}
                        />
                    </View> 
                )
            }
        </ThemeConsumer>
    )
}


export default Book_Category
