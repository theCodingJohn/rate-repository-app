import React from "react";
import { View, Pressable, StyleSheet } from "react-native";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  form: {
    padding: 15,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  submit_btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 15,
    alignItems: "center",
  },
});

const SigninForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <Pressable style={styles.submit_btn} onPress={onSubmit}>
        <Text color="light">Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SigninForm;
