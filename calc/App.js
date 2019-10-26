import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

//* ==> CONTEXT <== *//
import { MSProvider, MSConsumer } from "./context/MainContext";

//* ==> COMPONENTS <== *//
import MainField from "./components/MainField";

export default class App extends Component {
  // componentDidMount() {
  //   // MSProvider
  //   console.log("🐞: App -> componentDidMount -> MSProvider", MSProvider);
  //   console.log("🐞: App -> componentDidMount -> MSConsumer", MSConsumer);
  // }

  render() {
    return (
      <View style={styles.container}>
        <MainField />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf5e8"
  }
});
