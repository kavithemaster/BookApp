import { StyleSheet } from 'react-native'

export const Book_Details_Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        flex: 1,
    },
    container:{
        flexDirection:"row",
        top:15,
    },
    navigate_before_icon: {
        color: "black",
        marginLeft: 10,
    },
    image: {
        width: "40%",
        height: 290,
        marginTop: 40,
        marginLeft: 120,
    },
    name_text: {
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "700",
        color: "black",
        fontStyle:"italic",
        position:"absolute",
        marginLeft:100,
        textDecorationLine:"underline",
    },
    main_text: {
        alignSelf:"flex-end",
        fontSize: 20,
        fontWeight: "700",
        color: "black",
        marginBottom: 90,
        padding: 18,
        marginTop:20,
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
    hearingIcon:{
        position:"absolute",
        marginHorizontal:355,
        color:"black",
        top:11,
    },
    readAloud:{
        fontSize:16,
        position:'absolute',
        right: 10,
        top: 40,
    }
})