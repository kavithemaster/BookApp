import { StyleSheet } from 'react-native'
export const bookDetails = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        flex: 1,
    },
    container: {
        flexDirection: "row",
        top: 15,
    },
    navigateBeforeIcon: {
        color: "black",
        marginLeft: 10,
    },
    image: {
        width: "100%",
        height: 310,
        resizeMode: "stretch",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        top: 14,
    },
    imageConatiner: {
        elevation: 5,
        width: '90%',
        top: 50,
        marginHorizontal: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignSelf: "center",
        height: 310,
        zIndex: 4,
    },
    nameText: {
        fontSize: 30,
        fontWeight: "700",
        color: "black",
        fontStyle: "italic",
        position: "absolute",
        textDecorationLine: "underline",
        textAlign: "center",
        marginLeft: 100,
    },
    readMoreText: {
        color: "blue",
        fontWeight: "900",
    },
    overlayStyle: {
        borderRadius: 20,
    },
    overlayContainer: {
        width: 378,
        height: 390,
        backgroundColor: "white",
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subscribeText: {
        fontSize: 26,
        marginTop: 10,
        color: "black",
        fontWeight: "800",
    },
    overlayGif: {
        width: 190,
        height: 160,
        marginTop: 40,
    },
    clickHereText: {
        fontSize: 30,
        marginTop: 60,
        color: "black",
        fontWeight: "800",
    },
    hearingIcon: {
        position: "absolute",
        color: "black",
        marginHorizontal: 365,
        top: 10,
    },
    addIcon: {
        alignSelf:"flex-end",
        position:"absolute",
        top:10,
        color:"black",
        right:10,
    },
    minimize: {
        position:"absolute",
        color:"black",
        left:10,
    }
})