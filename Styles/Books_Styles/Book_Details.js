import { StyleSheet } from 'react-native'
export const Book_Details_Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        flex: 1,
    },
    container: {
        flexDirection: "row",
        top: 15,
    },
    navigate_before_icon: {
        color: "black",
        marginLeft: 10,
    },
    image: {
        width: "100%",
        height: 370,
        resizeMode:"stretch",
        // marginHorizontal: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    imageConatiner: {
        elevation:5,
        // borderWidth:2,
        width: '95%',
        top:20,marginHorizontal: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 10

    },
    name_text: {
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "700",
        color: "black",
        fontStyle: "italic",
        position: "absolute",
        marginLeft: 100,
        textDecorationLine: "underline",
    },
    main_text: {
        alignSelf: "flex-end",
        fontSize: 20,
        fontWeight: "700",
        color: "black",
        marginBottom: 90,
        padding: 27,
        textAlign: "justify",
        top:40,
    },
    read_more_text: {
        color: "blue",
        fontWeight: "900",
    },
    overlayStyle: {
        borderRadius: 20,
    },
    overlay_container: {
        width: 378,
        height: 390,
        backgroundColor: "white",
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subscribe_text: {
        fontSize: 26,
        marginTop: 10,
        color: "black",
        fontWeight: "800",
    },
    overlay_gif: {
        width: 190,
        height: 160,
        marginTop: 40,
    },
    click_here_text: {
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
})