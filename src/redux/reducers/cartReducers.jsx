import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART,ADD_ITEMS, SUB_ITEMS } from '../../types';

export const cartReducer = (
    state = {
        cartItems: localStorage.getItem("cartItems") ?
            JSON.parse(localStorage.getItem("cartItems")) :
        [] },
    action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { cartItems: action.payload.cartItems };
        case REMOVE_FROM_CART:
            return { cartItems: action.payload.cartItems };
        case ADD_ITEMS:
            return { cartItems: action.payload.cartItems };
        case SUB_ITEMS:
            return { cartItems: action.payload.cartItems };
        case CLEAR_CART:
            return { cartItems: [] };
        default:
            return state;
    }
    
}