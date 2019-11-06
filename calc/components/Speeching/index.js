import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import * as Speech from "expo-speech";

export default class Speeching extends Component {
  constructor() {
    super();
    this.state = {
      spoken: ""
    };
    // this.setState = this.setState.bind(this);
    this.speak = this.speak.bind(this);
  }

  speak() {
    const thingToSay =
      "Hello! My name is Arman and this is my app in React Native with EXPO framework";

    // this.setState = this.setState.bind(this);
    Speech.speak(thingToSay);
    // [...thingToSay].forEach(c => {
    //   this.setState({
    //     spoken: this.state.spoken.concat(c)
    //   });
    // });
  }
  Stop() {
    Speech.stop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.spoken}</Text>
        <Button title="Press to hear some words" onPress={this.speak} />
        <Button title="Stop" onPress={this.Stop} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
    padding: 8,
    marginBottom: 20
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
