// import {Platform, StyleSheet, Text, View,Image} from 'react-native';



import {INCREMENT} from './type'
import {DECREMENT}  from './type'
import {MULTIPLY}  from './type'
import {DIVIDE}   from './type'


const initialState = {
    count:0,
    color:'violet',
    pm:'',
    ax:'',
};

function reducer(state = initialState , action) {
    
    switch (action.type) {
        case INCREMENT:
        // console.warn('incraserrrrr')
            return{
                count:state.count + 1,
                color:action.payload.color,
                pm:'plus',
                ax:'one'
            };
        case DECREMENT:
            return{
                count:state.count - 1,
                color:action.payload.color,

                pm:'minus',
                ax: 'two'
            };
        case MULTIPLY:
            return{
                count:state.count * 5,
                color:action.payload.color,

                pm:'multiply',
                ax: 'three'
            };
        case DIVIDE:
            return{
                count:state.count / 2,
                color:action.payload.color,

                pm:'divide',
                ax: 'four'
            };

        default:
            return state;
    }
}

export default reducer;