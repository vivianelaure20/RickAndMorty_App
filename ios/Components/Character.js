import React, { useState, useEffect } from "react";
import axios from "axios";
import { View } from "react-native";

import CharacterScreen from "./ios/Screen/CharacterScreen";
import { ScrollView } from "react-native-gesture-handler";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCharacters() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );

        const result = response.data && response.data.results;

        setCharacters(result);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    getCharacters();
  }, []);

  return (
    <View>
      <ScrollView>
        {characters.map((c) => (
          <CharacterScreen {...c} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Characters;
