import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

//* ==> CONTEXT <== *//
import { MSProvider, MSConsumer } from "./context/MainContext";

//* ==> COMPONENTS <== *//
import MainField from "./components/MainField";
import MyPos from "./components/MyPos";
import Speeching from "./components/Speeching";

const dim = Dimensions.get("window");

export default class App extends Component {
  state = {
    window: 0
  };

  render() {
    const { window } = this.state;
    return (
      <View style={styles.container}>
        {window == 0 && <MainField />}
        {window == 1 && <MyPos />}
        {window == 2 && <Speeching />}
        <View style={{ flexDirection: "row", paddingHorizontal: 15 }}>
          <TouchableOpacity
            style={styles.links}
            onPress={() => this.setState({ window: 0 })}>
            <Text>Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.links}
            onPress={() => this.setState({ window: 1 })}>
            <Text>MyPosition</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.links}
            onPress={() => this.setState({ window: 2 })}>
            <Text>Speech</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fbf5e8",
    paddingBottom: dim.height > 800 ? 50 : 20,
    paddingTop: dim.height > 800 ? 50 : 100
  },
  links: {
    marginHorizontal: 15
  }
});
