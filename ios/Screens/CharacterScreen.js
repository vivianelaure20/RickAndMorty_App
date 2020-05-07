import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const CharacterScreen = (props) => {
  const { character } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: character.image,
        }}
      />
      <Text style={{ fontSize: 20 }}> Id:{character.id}</Text>
      <Text style={{ fontSize: 20 }}> Name: {character.name}</Text>
      <Text style={{ fontSize: 20 }}> Gender: {character.gender}</Text>
      <Text style={{ fontSize: 20 }}> Species: {character.species}</Text>
      <Text style={{ fontSize: 20 }}> Status: {character.status}</Text>
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
  image: {
    width: 380,
    height: 547,
    resizeMode: "cover",
  },
});

export default CharacterScreen;
