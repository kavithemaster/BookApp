import { StyleSheet } from 'react-native'
export const Book_Page_styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        justifyContent:"center",
    },
    text: {
        fontSize: 20,
        color: 'black',
        backgroundColor: "white",
        width: 200,
        fontWeight: 'bold',
        paddingLeft: 30,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderWidth: 1,
        fontStyle: "italic",
        textShadowRadius: 10,
        alignSelf: "center",
        borderBottomWidth: 8,
        borderBottomColor:"dodgerblue",
        marginTop: 1,
        justifyContent:"center",
        marginHorizontal:3,
    },
    opacity: {
        width: '98%',
        height: 260,
        alignSelf: "center",
    },
    image: {
        width: '98%',
        marginBottom: 10,
        alignSelf: "center",
        marginTop: 5,
    }
})