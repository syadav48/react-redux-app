import { BUY_PIZZA } from "./pizzaType"


const initialState = {
    numOfPizza: 15
}

const pizzaReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_PIZZA: return {
             ...state,
             numOfPizza: state.numOfPizza - 1
        }
         default: return state
    }

}
export default pizzaReducer