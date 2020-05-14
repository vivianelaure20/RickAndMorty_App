import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, SafeAreaView, FlatList } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import CharacterScreen from "../Screens/CharacterScreen";

const Characters = (props) => {
  const initialUrl = "https://rickandmortyapi.com/api/character/?page=1";

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({
    count: 394,
    pages: 20,
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

      if (characters.length <= 0) {
        setCharacters(result);
      } else {
        setCharacters(characters.concat(result));
      }

      setInfo(info);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getCharacters(initialUrl);
  }, []);

  function Item(info) {
    return (
      <View>
        <ScrollView>
          {characters.map((character, i) => (
            <CharacterScreen key={i} character={character} />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={getCharacters}
      onEndReached={() => {
        getCharacters(info.next);
      }}
      onEndReachedThreshold={0.5}
      renderItem={(e, info) => <Item key={e} info={info} />}
    />
  );
};

export default Characters;
