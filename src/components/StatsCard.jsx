import React from "react";
import { View } from "react-native";

import Text from "../components/Text";

const kFormatter = (num) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);

const StatsCard = ({ property, value }) => {
  return (
    <View>
      <Text fontSize="subheading" fontWeight="bold">
        {kFormatter(value)}
      </Text>
      <Text color="textSecondary">{property}</Text>
    </View>
  );
};

export default StatsCard;
