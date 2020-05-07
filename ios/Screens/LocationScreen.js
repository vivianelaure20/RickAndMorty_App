import React from "react";
import { StyleSheet, View, Text } from "react-native";

const LocationScreen = (props) => {
  const { location } = props;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, paddingTop: 16 }}> Id:{location.id}</Text>
      <Text style={{ fontSize: 20 }}> Name: {location.name}</Text>
      <Text style={{ fontSize: 20 }}> Type: {location.type}</Text>
      <Text style={{ fontSize: 20 }}> Dimension: {location.dimension}</Text>
      <Text style={{ fontSize: 20 }}> Created: {location.created}</Text>
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

export default LocationScreen;
