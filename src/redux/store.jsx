import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { productsReducer } from "./reducers/reducers"
import { cartReducer } from "./reducers/cartReducers"
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {}
const store = createStore(
    combineReducers({
        products: productsReducer,
        cart:cartReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk)))
export default store;