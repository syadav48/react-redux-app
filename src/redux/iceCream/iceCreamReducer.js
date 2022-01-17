import { BUY_ICECREAM } from "./iceCreamType"

const initialState = {
    numOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}
export default iceCreamReducer

// Next Step: create a store and let our store aware of this reducder.

// we learnt: createStore function will accept only one reducer.
// redux provide the combine-reducer function to handle multiple reducer. --> rootReducer