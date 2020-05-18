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
import EpisodeScreen from "../Screens/EpisodeScreen";

const Episodes = () => {
  const initialUrl = "https://rickandmortyapi.com/api/episode?page=1";

  const [episodes, setEpisodes] = useState([]);

  const [info, setInfo] = useState({
    count: 31,
    pages: 2,
    next: false,
    prev: false,
  });

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function getEpisodes(url) {
    try {
      setLoading(true);
      const response = await axios.get(url);

      const result = response.data && response.data.results;
      const info = response.data && response.data.info;

      if (episodes.length <= 0) {
        setEpisodes(result);
      } else {
        setEpisodes(episodes.concat(result));
      }

      setInfo(info);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getEpisodes(initialUrl);
  }, []);

  function Item(info) {
    return (
      <View>
        <ScrollView>
          {episodes.map((episode, i) => (
            <EpisodeScreen key={i} episode={episode} />
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
        data={getEpisodes}
        onEndReached={() => {
          getEpisodes(info.next);
        }}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={(e, info) => <Item key={e} info={info} />}
        ListFooterComponent={renderFooter}
      />
      {loading ? <ActivityIndicator color="black" size="small" /> : null}
    </SafeAreaView>
  );
};

export default Episodes;
