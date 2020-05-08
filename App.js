import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

import Character from "./ios/Src/Character";
import Locations from "./ios/Src/Locations";
import Episodes from "./ios/Src/Episodes";
import LoginScreen from "./ios/Screens/LoginScreen";

function LoginNavigator() {
  return (
    <View>
      <LoginScreen />
    </View>
  );
}

function CharacterNavigator() {
  return (
    <View>
      <Character />
    </View>
  );
}

function LocationNavigator() {
  return (
    <View>
      <Locations />
    </View>
  );
}

function EpisodeNavigator() {
  return (
    <View>
      <Episodes />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Home"
          component={LoginNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ white }) => (
              <Ionicons name="ios-home" color={white} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Characters"
          component={CharacterNavigator}
          options={{
            tabBarLabel: "Characters",
            tabBarIcon: ({ white }) => (
              <Ionicons name="ios-people" color={white} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Locations"
          component={LocationNavigator}
          options={{
            tabBarLabel: "Locations",
            tabBarIcon: ({ white }) => (
              <MaterialIcons name="location-on" color={white} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Episodes"
          component={EpisodeNavigator}
          options={{
            tabBarLabel: "Episodes",
            tabBarIcon: ({ white }) => (
              <Octicons name="versions" color={white} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
