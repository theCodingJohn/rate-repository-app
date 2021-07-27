import React from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
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

  nav_btn: {
    marginRight: 10,
  },
});

const AppBar = () => {
  return (
    <View>
      <ScrollView style={styles.container} horizontal>
        <Pressable style={styles.nav_btn}>
          <Link to="/">
            <Text color="light" fontSize="heading" fontWeight="bold">
              Repositories
            </Text>
          </Link>
        </Pressable>
        <Pressable style={styles.nav_btn}>
          <Link to="/signin">
            <Text color="light" fontSize="heading" fontWeight="bold">
              Sign in
            </Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
