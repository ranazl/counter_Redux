import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
// import types from '../Components/type'
import {setIncr , setDecr , setMult , setDiv} from '../Services/Actions'




class Counter extends Component {
  // constructor(props){
  //     super(props);
  //     this.state={
  //         lastCount: this.props.count
  //     }
  // }

  increament = () => {
    //   console.warn('increase')
    this.props.dispatch(setIncr());
  };

  decrement = () => {
    // console.warn('increase')

    this.props.dispatch(setDecr());
  };
  multy = () => {
    // console.warn('increase')

      this.props.dispatch(setMult())
  };
  divide = () => {
    // console.warn('increase')

      this.props.dispatch(setDiv())
  };



  render() {
    return (

      <View style={styles.className}>
        <View style={{flexDirection: "row", alignItems: "center", }}>
        <TouchableOpacity onPress={this.divide.bind(this)} >
          <Text style={styles.textInput}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.increament.bind(this)} style={{marginHorizontal:20,}}>
          <Text style={styles.textInput}>+</Text>
        </TouchableOpacity>
        {/* <Text style={styles.textInput}>{this.state.lastCount}</Text> */}
        <Text style={[styles.textInput,{color:this.props.color}]}>{this.props.count}</Text>
        <TouchableOpacity onPress={this.decrement.bind(this)} style={{marginHorizontal:20,}}>
          <Text style={styles.textInput}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.multy.bind(this)} >
                    <Text style={styles.textInput}>*</Text>
                </TouchableOpacity>
        <View style={{marginLeft:20}}>
          <Text>{this.props.pm}</Text>
        </View>
        </View>
        <View style={{marginTop:50}}>
        {this.props.ax === 'one' &&
        <Image
            source={require('../../picture/plus.png')}
        />}
        {this.props.ax === 'two' &&
        <Image
            source={require('../../picture/minus.png')}
        />}
        {this.props.ax === 'three' &&
        <Image
            source={require('../../picture/multiply.png')}
        />}
        {this.props.ax === 'four' &&
        <Image
            source={require('../../picture/divide.png')}
        />}
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  className: {
    flex: 1,
     alignItems: "center",
     justifyContent:'center'
  },
  textInput: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
  },

});

const mapStateToProps = state => {
  return {
    count: state.count,
    color:state.color,
    pm:state.pm,
    ax:state.ax,
  };
};

export default connect(mapStateToProps)(Counter);
