import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, CardContent, CardImage } from "react-native-cards";
import { Constants } from "expo";

const CharacterScreen = (props) => {
  const { character } = props;

  return (
    <View style={styles.container}>
      <Card>
        <CardImage
          style={styles.image}
          source={{
            uri: character.image,
          }}
        />
        <CardContent>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Id:{character.id}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Name: {character.name}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Gender: {character.gender}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Species: {character.species}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Status: {character.status}
          </Text>
        </CardContent>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    overflow: "hidden",
    backgroundColor: "gray",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: undefined,
    resizeMode: "contain",
  },
});

export default CharacterScreen;
