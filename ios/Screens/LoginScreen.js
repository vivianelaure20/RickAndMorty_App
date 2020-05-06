import React from "react";
import { Button, View, StyleSheet, ImageBackground, Text } from "react-native";

const image = {
  uri:
    "https://kbimages1-a.akamaihd.net/58e89908-7c9c-46d4-9008-f4993f59bc66/1200/1200/False/the-art-of-rick-and-morty.jpg",
};

export default class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Contacts",
      headerRight: (
        <Button
          title="Add"
          onPress={() => navigation.navigate()}
          color="#a41034"
        />
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 450,
    height: 600,
  },
});
