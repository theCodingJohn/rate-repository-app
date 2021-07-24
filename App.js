import React from "react";
import { View, StyleSheet } from "react-native";

import AppBar from "./src/components/AppBar";
import RepositoryList from "./src/components/RepositoryList";
import theme from "./src/theme";

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
});

const App = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default App;
