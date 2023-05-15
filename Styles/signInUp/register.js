import { StyleSheet } from 'react-native'
export const register = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: "100%",
    position: "relative",
  },
  container: {
    backgroundColor: "lightblue",
    width: "95%",
    height: 700,
    borderTopRightRadius: 400,
  },
  inputContainer: {
    marginTop: 50,
  },
  mainText: {
    fontSize: 19,
    fontWeight: "bold",
    textShadowRadius: 4,
    marginLeft: 10,
    fontStyle: "italic",
    color: "black",
    marginTop: 5,
  },
  placeholderText: {
    fontSize: 19,
    marginLeft: 16,
    color: "black",
    borderBottomWidth: 2,
    width: "60%",
    fontWeight: "bold",
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
  },
  gif: {
    alignSelf: "center",
  },
  registerText: {
    fontSize: 22,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 15,
    color: "white",
  },
  registerOpacity: {
    backgroundColor: "red",
    width: "50%",
    height: 60,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 2,
  },
  googleImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 310,
    marginLeft: 320,
    position: 'absolute',
  },
  faceBookImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 381,
    marginLeft: 320,
    position: "absolute",
  },
  microsoftImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 451,
    marginLeft: 320,
    position: "absolute",
  },
  eyeIcon: {
    marginLeft: 220,
    marginTop: 349,
    position: "absolute",
    color: "black",
  },
  eyeIcon1: {
    marginLeft: 220,
    marginTop: 449,
    position: "absolute",
    color: "black",
  },
})