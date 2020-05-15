import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import CharacterScreen from "../Screens/CharacterScreen";

const Characters = (props) => {
  const initialUrl = "https://rickandmortyapi.com/api/character/?page=1";

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({
    count: 394,
    pages: 20,
    next: false,
    prev: false,
  });

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

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

  function wait(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const renderFooter = () => {
    return (
      <View>
        {info.next ? <ActivityIndicator color="black" size="large" /> : null}
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={getCharacters}
        onEndReached={() => {
          getCharacters(info.next);
        }}
        onEndReachedThreshold={0.5}
        renderItem={(e, info) => <Item key={e} info={info} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={renderFooter}
      />
      {loading ? <ActivityIndicator color="black" size="small" /> : null}
    </SafeAreaView>
  );
};

export default Characters;
