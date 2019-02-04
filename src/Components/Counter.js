import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { connect } from "react-redux";

class Counter extends Component {
  // constructor(props){
  //     super(props);
  //     this.state={
  //         lastCount: this.props.count
  //     }
  // }

  increament = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };
  // multy = () => {
  //     this.props.dispatch({
  //         type:'MULTIPLY'
  //     })
  // };
  // divide = () => {
  //     this.props.dispatch({
  //         type:'DIVIDE'
  //     })
  // };

  render() {
    return (
      // <div>
      //     <h2>
      //         Couter
      //     </h2>
      //     <div>
      //         <button onClick={this.increament}>+</button>
      //         <span>{this.props.count}</span>
      //         <button onClick={this.decrement}>-</button>
      //     </div>
      // </div>
      <View style={styles.className}>
        <TouchableOpacity onPress={this.divide}>
          <Text style={styles.textInput}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.increament}>
          <Text style={styles.textInput}>+</Text>
        </TouchableOpacity>
        {/* <Text style={styles.textInput}>{this.state.lastCount}</Text> */}
        <Text style={styles.textInput}>{this.props.count}</Text>
        <TouchableOpacity onPress={this.decrement}>
          <Text style={styles.textInput}>-</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={this.multy}>
                    <Text style={styles.textInput}>*</Text>
                </TouchableOpacity> */}
        <View>
          {/* <TextInput placeholder={"Number"} onChangeText={this.getNumber} /> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  className: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  textInput: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold"
  },
  viewStyle: {
    borderWidth: 1,
    width: 300,
    marginTop: 40
  }
});

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
