import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Character from "./ios/Components/Character";
import Locations from "./ios/Components/Locations";
import Episodes from "./ios/Components/Episodes";
import LoginScreen from "./ios/Screens/LoginScreen";

function LoginDrawer() {
  return (
    <View>
      <LoginScreen />
    </View>
  );
}

function CharacterDrawer() {
  return (
    <View>
      <Character />
    </View>
  );
}

function LocationsDrawer() {
  return (
    <View>
      <Locations />
    </View>
  );
}

function EpisodesDrawer() {
  return (
    <View>
      <Episodes />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={"Home"}>
        <Drawer.Screen name="Home" component={LoginDrawer} />
        <Drawer.Screen name="Characters" component={CharacterDrawer} />
        <Drawer.Screen name="Locations" component={LocationsDrawer} />
        <Drawer.Screen name="Episodes" component={EpisodesDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
