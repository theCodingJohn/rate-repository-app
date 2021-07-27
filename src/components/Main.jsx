import React from "react";
import { View, StyleSheet } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import Signin from "./Signin";
import theme from "../theme";

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
