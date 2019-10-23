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
        {/* <MSProvider>
          <MSConsumer>
            {({ storeVar1, storeVar2 }) => ( */}
        <MainField />
        {/* )}
          </MSConsumer>
        </MSProvider> */}
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 15
  }
});
