import { StyleSheet } from "react-native";

export default function styles() {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#025",
      width: 100,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginTop: 20,
    },
    text: {
      color: "white",
    },
    input_success: {
      borderColor: "green",
      borderWidth: 2,
    },
    input_error: {
      borderColor: "red",
      borderWidth: 2,
    },
    input_normal: {
      borderColor: "gray",
      borderWidth: 2,
    },
    hide: {
      display: "none",
    },
    inputCont: {
      margin: 10,
      padding: 10,
      borderRadius: 10,
      width: 270,
    },
    form: {
      alignItems: "center",
      backgroundColor: "#dfdfdf",
      paddingHorizontal: 30,
      paddingVertical: 70,
      borderRadius: 20,
      opacity: 0.9,
    },
  });
  return styles;
}
