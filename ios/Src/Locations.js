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
import LocationScreen from "../Screens/LocationScreen";

const Locations = (props) => {
  const initialUrl = "https://rickandmortyapi.com/api/location?page=1";

  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState({
    count: 67,
    pages: 4,
    next: false,
    prev: false,
  });

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function getLocations(url) {
    try {
      setLoading(true);
      const response = await axios.get(url);

      const result = response.data && response.data.results;
      const info = response.data && response.data.info;

      if (locations.length <= 0) {
        setLocations(result);
      } else {
        setLocations(locations.concat(result));
      }

      setInfo(info);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getLocations(initialUrl);
  }, []);

  function Item(info) {
    return (
      <View>
        <ScrollView>
          {locations.map((location, i) => (
            <LocationScreen key={i} location={location} />
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
        data={getLocations}
        onEndReached={() => {
          getLocations(info.next);
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

export default Locations;
