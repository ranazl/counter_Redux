
import {INCREMENT} from './type'
import {DECREMENT} from './type'
import {MULTIPLY} from './type'
import {DIVIDE} from './type'

export const setIncr = () => {
    return{
        type: INCREMENT
    }
}

export const setDecr = () => {
    return{
        type: DECREMENT
    }
}

export const setMult  =() => {
    return{
        type: MULTIPLY
    }
}

export const  setDiv =() => {
    return{
        type: DIVIDE
    }
}