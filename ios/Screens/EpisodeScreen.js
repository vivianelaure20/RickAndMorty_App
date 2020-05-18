import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, CardContent } from "react-native-cards";

const EpisodeScreen = (props) => {
  const { episode } = props;

  return (
    <View style={styles.container}>
      <Card style={{ paddingTop: 10, justifyContent: "space-between" }}>
        <CardContent style={{ marginTop: 16, paddingTop: 10 }}>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Id:{episode.id}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Name: {episode.name}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Air Date: {episode.air_date}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Episode: {episode.episode}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Created: {episode.created}
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
    justifyContent: "space-between",
  },
});

export default EpisodeScreen;
