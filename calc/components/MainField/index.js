import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";

let colorAccent = "#e25a53";
let colorPrimary = "#a4d9d6";
let colorSecondary = "#fdb35d";
let colorBackground = "#fbf5e8";

const dim = Dimensions.get("window");

class MainField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isRes: false,
      colorAccent: "#e25a53",
      colorPrimary: "#a4d9d6",
      colorSecondary: "#fdb35d",
      colorBackground: "#fbf5e8"
    };
  }
  calculate = () => {
    const { value } = this.state;
    this.setState({
      value: eval(value).toString(),
      isRes: true
    });
  };
  changeToStandart = () => {
    this.setState({
      colorAccent: "#e25a53",
      colorPrimary: "#a4d9d6",
      colorSecondary: "#fdb35d",
      colorBackground: "#fbf5e8"
    });
  };
  changeToLime = () => {
    this.setState({
      colorAccent: "#a01862",
      colorPrimary: "#c6d663",
      colorSecondary: "#fa921f",
      colorBackground: "#faf3e3"
    });
  };
  changeToNight = () => {
    this.setState({
      colorAccent: "#78dbf3",
      colorPrimary: "#c3f7eb",
      colorSecondary: "#fbf9f3",
      colorBackground: "#323846"
    });
  };
  changeToMilitary = () => {
    this.setState({
      colorAccent: "#ff6f3d",
      colorPrimary: "#3e503c",
      colorSecondary: "#7f886a",
      colorBackground: "#f3ecdb"
    });
  };
  render() {
    const {
      colorAccent,
      colorBackground,
      colorPrimary,
      colorSecondary,
      value
    } = this.state;
    const val = parseInt(this.state.value);
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operands = ["+", "-", "*", "/"];
    return (
      <View style={{ ...Wrap, backgroundColor: colorBackground }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              position: "relative",
              width: 35,
              height: 35,
              flexDirection: "row",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: 15,
              transform: [{ rotate: "30deg" }]
            }}
            onPress={this.changeToStandart}>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#a4d9d6"
              }}></View>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#e25a53"
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "relative",
              width: 35,
              height: 35,
              flexDirection: "row",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: 15,
              transform: [{ rotate: "30deg" }]
            }}
            onPress={this.changeToLime}>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#c6d663"
              }}></View>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#a01862"
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "relative",
              width: 35,
              height: 35,
              flexDirection: "row",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: 15,
              transform: [{ rotate: "30deg" }]
            }}
            onPress={this.changeToNight}>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#323846"
              }}></View>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#78dbf3"
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "relative",
              width: 35,
              height: 35,
              flexDirection: "row",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: 15,
              transform: [{ rotate: "30deg" }]
            }}
            onPress={this.changeToMilitary}>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#3e503c"
              }}></View>
            <View
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#ff6f3d"
              }}></View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "50%",
            justifyContent: "flex-end",
            paddingBottom: 30
          }}>
          <Text
            style={{
              color: !this.state.isRes ? colorSecondary : colorAccent,
              fontSize: 48,
              textAlign: "right"
            }}>
            {this.state.value && this.state.value}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ value: "" });
            }}
            style={{ ...operand, width: "25%", backgroundColor: colorAccent }}>
            <Text
              style={{
                color: colorBackground === "#323846" ? "#323846" : "#fff",
                textAlign: "center",
                fontSize: 26
              }}>
              C
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "70%"
            }}>
            {numbers.map((it, i) => (
              <TouchableOpacity
                key={i}
                style={{ ...number, backgroundColor: colorPrimary }}
                onPress={() => {
                  this.setState({
                    value: this.state.value.concat(`${9 - i}`),
                    isRes: false
                  });
                }}>
                <Text
                  style={{
                    color: colorBackground === "#323846" ? "#323846" : "#fff",
                    textAlign: "center",
                    fontSize: 26
                  }}>
                  {9 - i}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                width: "65%",
                display: "block",
                padding: 15,
                backgroundColor: colorAccent,
                marginBottom: 10,
                borderRadius: 50
              }}
              onPress={this.calculate}>
              <Text
                style={{
                  color: colorBackground === "#323846" ? "#323846" : "#fff",
                  textAlign: "center",
                  fontSize: 26
                }}>
                =
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "30%", paddingLeft: 15 }}>
            {operands.map((it, i) => (
              <TouchableOpacity
                key={i}
                style={{ ...operand, backgroundColor: colorAccent }}
                onPress={() => {
                  value &&
                    this.setState({
                      value: this.state.value.concat(it),
                      isRes: false
                    });
                }}>
                <Text
                  style={{
                    color: colorBackground === "#323846" ? "#323846" : "#fff",
                    textAlign: "center",
                    fontSize: 26
                  }}>
                  {it}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const Wrap = {
  position: "relative",
  width: "100%",
  height: "100%",
  justifyContent: "flex-end",
  paddingHorizontal: 15,
  // paddingVertical: 30
  paddingBottom: dim.height > 800 ? 50 : 20,
  paddingTop: dim.height > 800 ? 120 : 100
};
const number = {
  width: "30%",
  display: "block",
  padding: 15,
  marginBottom: 10,
  borderRadius: 50
};
const operand = {
  width: "100%",
  display: "block",
  padding: 15,
  marginBottom: 10,
  borderRadius: 50
};

export default MainField;
