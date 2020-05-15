import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, CardContent, CardImage } from "react-native-cards";
import { Constants } from "expo";

const CharacterScreen = (props) => {
  const { character } = props;

  return (
    <View style={styles.container}>
      <Card style={{ height: 700 }}>
        <CardImage
          style={styles.image}
          source={{
            uri: character.image,
          }}
        />
        <CardContent style={{ marginTop: 350 }}>
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
    backgroundColor: "#ff00ff00",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: undefined,

    marginBottom: 80,
    //aspectRatio: 1200 / 360,
    resizeMode: "contain",
  },
});

export default CharacterScreen;
