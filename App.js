import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import Character from "./ios/Components/Character";

export default function App() {
  return (
    <View style={styles.container}>
      <Character />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
