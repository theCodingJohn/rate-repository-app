import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data } = useRepositories();

  const repositories =
    data && data?.repositories.edges
      ? data.repositories.edges.map((edge) => edge.node)
      : [];

  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => <RepositoryItem repo={item} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryList;
