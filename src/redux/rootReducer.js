import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from './cake/cakeReducer'
import pizzaReducer from "./pizza/pizzaReducer";



const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizza: pizzaReducer 
})
export default rootReducer 


// in case of multiple store we need multiple reducer, in that case combineReducer works for you.
// combineReducer combine all the reducer and we can pass it into our store in createStore function.

// --> lets go into store.js