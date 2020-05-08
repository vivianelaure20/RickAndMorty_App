import React, { useState, useEffect } from "react";
import axios from "axios";
import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import LocationScreen from "../Screens/LocationScreen";

const Locations = (props) => {
  const [locations, setLocations] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLocations() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://rickandmortyapi.com/api/location/"
        );

        const result = response.data && response.data.results;

        setLocations(result);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    getLocations();
  }, []);

  return (
    <View>
      <ScrollView>
        {locations.map((location, i) => (
          <LocationScreen key={i} location={location} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Locations;
