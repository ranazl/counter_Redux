//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../Services/reducer'
import Counter from '../Components/Counter'


// create a component
class Main extends Component {
    render() {

         store = createStore(reducer)
        return (
            <Provider style={styles.container} store={store} >
                <Counter/>
            </Provider>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Main;
