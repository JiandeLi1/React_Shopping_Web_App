import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { productsReducer } from "./reducers/reducers"
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {}
const store = createStore(
    combineReducers({
        products:productsReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk)))
export default store;