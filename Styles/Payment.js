import { StyleSheet } from "react-native";
export const payment = StyleSheet.create({
    maincontainer: {
        backgroundColor: "lightblue",
        height: "100%",
        width: "100%"
    },
    avatar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 80,
    },
    icon: {
        marginTop: 40,
        marginLeft: 20,
        color: "black",
    },
    arrowLeft: {
        color: "black",
    },
    getItText: {
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor: "red",
        borderRadius: 20,
        padding: 10,
        color: "white",
        textAlign: "center",
        width: "50%",
        alignSelf: "flex-end",
        top:30,
    },
    clickGif: {
        alignSelf: "center",
        width:"100%",
        height:"50%",
        resizeMode:"contain",
    },
    overLay: {
        borderRadius: 20,
        width: "90%",
        justifyContent: "center",
        height:370,
    },
    overLayContainer: {
        width: "100%",
        height: "80%",
    },
    successModal: {
        alignSelf: "center",
        marginTop: 150,
        width: "100%"
    },
    buyedText: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 20,
    },
    subscribeBuyText: {
        fontSize: 28,
        alignSelf: "center",
        color: "black",
        marginTop: 60,
        fontWeight: "800",
        textAlign: "justify"
    },
})
