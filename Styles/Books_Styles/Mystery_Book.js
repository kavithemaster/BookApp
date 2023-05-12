import { StyleSheet } from 'react-native'

export const Mystery_Book_Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "lightblue",
        marginTop: 17,
        width: "70%",
        alignSelf: "center",
    },
    mainPage: {
        backgroundColor: "white",
        flex: 1,
    },
    Image_style: {
        height: 380,
        width: "92%",
        marginTop: 15,
        marginLeft: 19,
        alignSelf: "center",
    },
    amount_style: {
        fontSize: 20,
        color: 'black',
        backgroundColor: "lavenderblush",
        width: '80%',
        fontWeight: 'bold',
        paddingLeft: 30,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderWidth: 1,
        fontStyle: "italic",
        textShadowRadius: 10,
        borderBottomWidth: 8,
        marginLeft: 30,
        marginTop: 15,
    },
    Fav_Style: {
        color: 'red',
        backgroundColor: "white",
        width: 45,
        height: 45,
        fontWeight: 'bold',
        marginLeft: 190,
        position: "absolute",
        borderWidth: 1,
        borderRadius: 90,
        paddingLeft: 1,
        paddingTop: 3,
        marginTop: 3,
    },
    SearchBar_style: {
        width: 300,
        height: 60,
        marginLeft: 60,
        marginTop: 3,
        backgroundColor:"white",
        borderColor: 'white'
    },
    navigate_before_icon: {
        position: "absolute",
        marginTop: 15,
        color: "black",
    },
    keyboard_voice_icon: {
        position: "absolute",
        marginTop: 21,
        color: "black",
        marginLeft: 365,
    },
    SearchBar_input: {
        color: "black",
        fontSize: 20,
    },
    rating: {
        marginBottom: 10,
        marginTop: 7,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    }
})