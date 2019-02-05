
import {INCREMENT} from './type'
import {DECREMENT} from './type'
import {MULTIPLY} from './type'
import {DIVIDE} from './type'

export const setIncr = () => {
    return{
        type: INCREMENT,
        payload:{
            color:'red'
        }

    }
}

export const setDecr = () => {
    return{
        type: DECREMENT,
        payload:{
            color:'green'
        }
    }
}

export const setMult  =() => {
    return{
        type: MULTIPLY,
        payload:{
            color:'blue'
        }
    }
}

export const  setDiv =() => {
    return{
        type: DIVIDE,
        payload:{
            color:'yellow'
        }
    }
}