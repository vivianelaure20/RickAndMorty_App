import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import CharacterScreen from "./ios/Screens/CharacterScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CharacterScreen />
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
