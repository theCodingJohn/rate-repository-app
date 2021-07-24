import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";

import Text from "../components/Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 15,
    paddingBottom: 10,
    backgroundColor: "#24292e",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text color="light" fontSize="heading" fontWeight="bold">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
