import React from "react";
import { StyleSheet, View, Text } from "react-native";

const EpisodeScreen = (props) => {
  const { episode } = props;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, paddingTop: 16 }}> Id:{episode.id}</Text>
      <Text style={{ fontSize: 20 }}> Name: {episode.name}</Text>
      <Text style={{ fontSize: 20 }}> Air Date: {episode.air_date}</Text>
      <Text style={{ fontSize: 20 }}> Episode: {episode.episode}</Text>
      <Text style={{ fontSize: 20 }}> Created: {episode.created}</Text>
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

export default EpisodeScreen;
