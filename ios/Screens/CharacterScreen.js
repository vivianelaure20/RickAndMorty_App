import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CharacterScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.image}</Text>
      <Text> Name: {props.name}</Text>
      <Text> Gender: {props.gender}</Text>
      <Text> Species: {props.species}</Text>
      <Text> Status: {props.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CharacterScreen;
