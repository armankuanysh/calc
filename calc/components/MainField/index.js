import React, { Component } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

class MainField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  componentDidUpdate() {
    const { storeVar1 } = this.props;
    // this.state.value
    console.log(
      "🐞: MainField -> componentDidUpdate -> this.state.value",
      this.state.value
    );
  }
  render() {
    const { storeVar1, storeVar2 } = this.props;
    const val = parseInt(this.state.value);
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("🐞: MainField -> render -> this.props", this.props);
    return (
      <View>
        <Text> {this.state.value && this.state.value}</Text>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
          {numbers.map((it, i) => (
            <TouchableOpacity
              key={i}
              style={{
                width: "30%",
                display: "block",
                padding: 15,
                backgroundColor: "blue",
                marginBottom: 10
              }}
              onPress={() => {
                this.setState({ value: this.state.value.concat(`${9 - i}`) });
              }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                {9 - i}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* <Button
          title="1"
          onPress={() => {
            this.setState(
              { value: this.state.value.concat("1") }
            );
          }}
        />
        <Button
          title="2"
          onPress={() => {
            this.setState(
              { value: this.state.value.concat("2") }
            );
          }}
        /> */}
      </View>
    );
  }
}

export default MainField;
