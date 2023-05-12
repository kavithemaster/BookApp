import { StyleSheet } from 'react-native'
export const Login_Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height:"100%",
  },
  container: {
    backgroundColor: "lightblue",
    position: "absolute",
    marginTop: 220,
    width: "83%",
    height: 300,
    borderTopRightRadius: 160,
    borderBottomRightRadius: 160,
  },
  main_text: {
    fontSize: 19,
    fontWeight: "bold",
    textShadowRadius: 4,
    marginLeft: 10,
    color: "black",
    marginTop: 35,
  },
  placeholder_text: {
    fontSize: 19,
    marginLeft: 16,
    color: "black",
    borderBottomWidth: 2,
    width: "80%",
    fontWeight: "bold",
  },
  signup_text: {
    fontSize: 19,
    marginLeft: 100,
    marginTop: 20,
    fontWeight: "bold",
    color: "darkblue",
  },
  about_text: {
    color: "white",
    fontSize: 20,
    textDecorationLine: "underline",
    alignSelf: "center",
    marginTop: 15,
    fontWeight: "bold",
  },
  imgae_style: {
    position: "absolute",
    alignSelf: "center",
    width: 280,
    height: 190,
  },
  about_contanier: {
    position: "absolute",
    backgroundColor: "red",
    marginTop: 630,
    width: "30%",
    height: 60,
    marginLeft: 290,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,
  },
  eye_icon: {
    marginLeft: 280,
    marginTop: 175,
    position: "absolute",
    color: "black",
  },
  login_opacity: {
    backgroundColor: "red",
    width: "50%",
    height: 60,
    alignSelf: "center",
    marginTop: 550,
    borderRadius: 20,
    borderWidth: 2,
  },
  login_text: {
    fontSize: 22,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 15,
    color: "white",
  }
})