import React from "react";
import { View, Image, StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";
import StatsCard from "./StatsCard";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.backgroundSecondary,
  },

  row1: {
    flexDirection: "row",
    marginBottom: 20,
  },

  row2: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  row1column1: {
    flexGrow: 0,
  },

  row1column2: {
    flexGrow: 1,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 15,
  },

  repoTitle: {
    marginBottom: 6,
  },

  repoDescription: {
    marginBottom: 8,
    flexDirection: "row",
  },

  tag: {
    backgroundColor: theme.colors.primary,
    padding: 4,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
});

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.row1column1}>
          <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }} />
        </View>
        <View style={styles.row1column2}>
          <Text
            style={styles.repoName}
            color="dark"
            fontSize="heading"
            fontWeight="bold"
          >
            {repo.fullName}
          </Text>

          <View style={styles.repoDescription}>
            <Text style={{ flex: 1 }} color="textSecondary">
              {repo.description}
            </Text>
          </View>

          <View>
            <Text style={styles.tag} color="light">
              {repo.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.row2}>
        <StatsCard property="Stars" value={repo.stargazersCount} />
        <StatsCard property="Forks" value={repo.forksCount} />
        <StatsCard property="Reviews" value={repo.reviewCount} />
        <StatsCard property="Rating" value={repo.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
