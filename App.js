
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Main from './src/Pages/Main'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
