const initialState = {
    count:0
};

function reducer(state = initialState , action) {
    
    switch (action.type) {
        case 'INCREMENT':
            return{
                count:state.count + 1
            };
        case 'DECREMENT':
            return{
                count:state.count - 1
            };
        // case 'MULTIPLY':
        //     return{
        //         count:state.count * 2
        //     };
        // case 'DIVIDE':
        //     return{
        //         count:state.count / 2
        //     };

        default:
            return state;
    }
}

export default reducer;