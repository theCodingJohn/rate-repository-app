import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

import Text from "../components/Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 15,
    paddingBottom: 10,
    backgroundColor: "#24292e",
  },

  repository_btn: {
    marginRight: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.repository_btn}>
        <Link to="/">
          <Text color="light" fontSize="heading" fontWeight="bold">
            Repositories
          </Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/signin">
          <Text color="light" fontSize="heading" fontWeight="bold">
            Signin
          </Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBar;
