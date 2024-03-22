import React from "react";
import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Pressable } from "react-native";

export default function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Iniciar Sesion</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 200,
    marginTop: 100,
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
});
