import React, { useState, useEffect } from "react";
import axios from "axios";
import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import EpisodeScreen from "../Screens/EpisodeScreen";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function getEpisodes() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/episode/"
        );

        const result = response.data && response.data.results;

        setEpisodes(result);
      } catch (e) {
        console.error(e);
      }
    }
    getEpisodes();
  }, []);

  return (
    <View>
      <ScrollView>
        {episodes.map((episode, i) => (
          <EpisodeScreen key={i} episode={episode} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Episodes;
