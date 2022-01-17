import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store

//earlier it was only cakeReducer but now it is contaning both cake and iceCream wth of rootReducer.
// earlier it imports only index file where cakeReducer imported but incase of multiple reducer rootReducer we used

//logger-middleware logs the information related to the redux store 

// to use the redux-devtool- extension --> we need composeWithDevTools package

// this composeWithDevtools --> accept the applymiddleWare as parameter with it parameter