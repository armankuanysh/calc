import React, { Component, createContext } from "react";

const MSContext = createContext({
  takeVar1: () => {},
  takeVar2: () => {},
  operate: () => {},
  var1: null,
  var2: null,
  result: null
});

export class MSProvider extends Component {
  takeVar1 = v => {
    this.setState({ var1: v }, () => {
      console.log("state", this.state.var1, "v", v);
    });
  };

  takeVar2 = v => {
    this.setState({ var2: v });
  };

  operation = (v1, v2, op) => {
    if (!v1 || !v2 || !op) return;
    switch (op) {
      case "+":
        this.setState({ result: v1 + v2 });
        break;
      case "-":
        this.setState({ result: v1 - v2 });
        break;
      case "/":
        this.setState({ result: v1 / v2 });
        break;
      case "*":
        this.setState({ result: v1 + v2 });
        break;
      default:
        alert("Undefined operand");
    }
  };

  sum = (v1, v2) => {
    if (v1 && v2) {
      this.setState({ result: v1 + v2 });
    }
  };

  state = {
    var1: null,
    var1Is: false,
    storeVar1: this.takeVar1,
    var2: null,
    var2Is: false,
    storeVar2: this.takeVar2,
    result: null,
    operate: this.operation
  };

  // componentDidUpdate(prevProps, nextProps) {
  //   console.log("====================================");
  //   console.log("context state", this.state.var1);
  //   console.log("====================================");
  // }

  render() {
    const { children } = this.props;
    return (
      <MSContext.Provider value={this.state}>{children}</MSContext.Provider>
    );
  }
}

export const MSConsumer = MSContext.Consumer;
