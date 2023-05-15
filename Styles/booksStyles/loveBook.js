import { StyleSheet } from "react-native"

export const loveBook = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        flex:1,
    },
    text: {
        fontSize: 30,
        color: "red",
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 30,
    },
    text1: {
        alignSelf: "center",
        fontSize: 30,
        marginTop: 80,
    },
    button: {
        width: '50%',
        height: 50,
        backgroundColor: "red",
        alignSelf: "center",
        marginTop: 590,
        borderRadius: 30,
        position: "absolute",
    },
    buttonText: {
        fontSize: 30,
        fontStyle: "italic",
        alignSelf: "center",
        color: "white",
        fontWeight: "bold",
    },
    image: {
        width: '80%',
        height: "50%",
        marginTop: 90,
        marginLeft: 40,
    }
})