import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const MyTaskScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={{ uri: item.photo }}
              style={{
                width: Dimensions.get("window").width * 0.9,
                height: 200,
                borderRadius: 8,
              }}
            />
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default MyTaskScreen;
