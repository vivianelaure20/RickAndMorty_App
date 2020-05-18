import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, CardContent } from "react-native-cards";

const LocationScreen = (props) => {
  const { location } = props;

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
            Id:{location.id}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Name: {location.name}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Type: {location.type}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Dimension: {location.dimension}
          </Text>
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {" "}
            Created: {location.created}
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
    justifyContent: "space-between",
  },
});

export default LocationScreen;
