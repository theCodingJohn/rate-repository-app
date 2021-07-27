import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../components/Text";

const styles = StyleSheet.create({
  statsCard: {
    alignItems: "center",
    marginBottom: 5,
  },
});

const kFormatter = (num) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);

const StatsCard = ({ property, value }) => {
  return (
    <View style={styles.statsCard}>
      <Text fontSize="subheading" fontWeight="bold">
        {kFormatter(value)}
      </Text>
      <Text color="textSecondary">{property}</Text>
    </View>
  );
};

export default StatsCard;
