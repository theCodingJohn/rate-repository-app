import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: theme.colors.backgroundPrimary,
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
  },
});

const TextInput = ({ style, ...props }) => {
  const TextInputStyle = [style, styles.textInput];

  return <NativeTextInput style={TextInputStyle} {...props} />;
};

export default TextInput;
