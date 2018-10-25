import settings from "../config/settings";
import { onSignIn, onSignUp } from "../../auth";
import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import {
  Button,
  Card,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPressed: false,
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  // more info about fetch and promise:
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address..." />
          <FormLabel>First Name</FormLabel>
          <FormInput placeholder="Firstname..." />
          <FormLabel>Last Name</FormLabel>
          <FormInput placeholder="Lastname..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..." />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#694fad"
            title="SIGN UP"
            onPress={() => onSignUp()}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    flex: 1,
    padding: 10
  },
  button: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-end",
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    backgroundColor: "whitesmoke",
    color: "#4A90E2",
    fontSize: 24,
    padding: 10
  }
});
export default SignUpScreen;
