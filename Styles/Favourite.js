import { StyleSheet } from 'react-native'
export const Favourite_styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "white",
    },
    image: {
        height: 380,
        width: "76%",
        marginTop: 27,
        marginBottom: 40,
        marginHorizontal:90,
    },
    favouriteIcon: {
        color: 'red',
        backgroundColor: "white",
        width: 40,
        height: 40,
        fontWeight: 'bold',
        marginLeft: 195,
        position: "absolute",
        borderRadius: 30,
        paddingLeft: 1,
        marginTop: 3,
        paddingTop: 2,
    },
    text: {
        padding:19,
        fontSize:19,
        color:"black",
        backgroundColor:"white",
        fontWeight:'800',
        height:700,
        width:"70%",
        marginLeft:10,
    },
    favouriteGif:{
        width:"70%",
        height:250,
        borderRadius:300,
        borderRadius:400,
    }
})