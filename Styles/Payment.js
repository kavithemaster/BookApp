import { StyleSheet } from "react-native";
export const Payment_style = StyleSheet.create({
    maincontainer: {
        backgroundColor: "lightblue",
        height: "100%",
        width: "100%"
    },
    avatar_style: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 80,
    },
    icon_style: {
        marginTop: 40,
        marginLeft: 20,
        color: "black",
    },
    icon_style1: {
        marginLeft: 10,
        color: "black",
    },
    GetIt_text: {
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: 180,
        backgroundColor: "blue",
        borderRadius: 20,
        padding: 10,
        alignSelf: "center",
        color: "white",
    },
    Overlay_container: {
        width: "90%",
        height: "35%",
        borderRadius: 70,
    },
    Overlay_container1: {
        width: "100%",
        height: "80%",
    },
    success_modal: {
        alignSelf: "center",
        marginTop: 150,
        width: "100%"
    },
    Buyed_text: {
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
        fontWeight:"800",
    }
})
