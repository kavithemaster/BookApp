import { StyleSheet } from 'react-native'
export const Register_styles = StyleSheet.create({
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
  input_container: {
    marginTop: 50,
  },
  main_text: {
    fontSize: 19,
    fontWeight: "bold",
    textShadowRadius: 4,
    marginLeft: 10,
    fontStyle: "italic",
    color: "black",
    marginTop: 5,
  },
  placeholder_text: {
    fontSize: 19,
    marginLeft: 16,
    color: "black",
    borderBottomWidth: 2,
    width: "60%",
    fontWeight: "bold",
  },
  error_text: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
  },
  gif_style: {
    alignSelf: "center",
  },
  register_text: {
    fontSize: 22,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 15,
    color: "white",
  },
  register_opacity: {
    backgroundColor: "red",
    width: "50%",
    height: 60,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 2,
  },
  google_image_style: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 310,
    marginLeft: 320,
    position: 'absolute',
  },
  FaceBook_image_style: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 381,
    marginLeft: 320,
    position: "absolute",
  },
  Microsoft_image_style: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 451,
    marginLeft: 320,
    position: "absolute",
  },
  eye_icon: {
    marginLeft: 260,
    marginTop: 349,
    position: "absolute",
    color: "black",
  },
  eye_icon1: {
    marginLeft: 260,
    marginTop: 449,
    position: "absolute",
    color: "black",
  },
})