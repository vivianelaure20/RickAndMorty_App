import React, { useState, useEffect } from "react";
import axios from "axios";
import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import CharacterScreen from "../Screens/CharacterScreen";

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
      } catch (e) {
        console.error(e);
      }
    }
    getCharacters();
  }, []);

  return (
    <View>
      <ScrollView>
        {characters.map((character, i) => (
          <CharacterScreen key={i} character={character} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Characters;
