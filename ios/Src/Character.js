import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Button } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import CharacterScreen from "../Screens/CharacterScreen";

const Characters = (props) => {
  const initialUrl = "https://rickandmortyapi.com/api/character/?page=1";

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({
    count: 591,
    pages: 30,
    next: null,
    prev: null,
  });

  const [loading, setLoading] = useState(false);

  async function getCharacters(url) {
    try {
      setLoading(true);

      const response = await axios.get(url);

      const result = response.data && response.data.results;
      const info = response.data && response.data.info;

      setCharacters(result);
      setInfo(info);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getCharacters(initialUrl);
  }, []);

  const getNextPage = () => {
    {
      info.next ? <>{getCharacters(info.next)}</> : null;
    }
  };
  const getPreviousPage = () => {
    {
      info.prev ? <>{getCharacters(info.prev)}</> : null;
    }
  };

  return (
    <View>
      {info.prev && (
        <Button title="Previous" onPress={getPreviousPage}></Button>
      )}
      {info.next && <Button title="Next" onPress={getNextPage}></Button>}

      <ScrollView>
        {characters.map((character, i) => (
          <CharacterScreen key={i} character={character} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Characters;
