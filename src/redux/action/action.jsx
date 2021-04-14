import {
    FETCH_PRODUCTS,
    FITER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CREATE_ORDER,
    CLEAR_ORDER,
    CLEAR_CART,
    ADD_ITEMS,
    SUB_ITEMS
} from "../../types";

export const fetchProduct = () => async (dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    })
}


export const filterProduct = (products, size, sort) => (dispatch) => {
    dispatch({
        type: FITER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            sort:sort,
            items: size == "" ? products :
                products.filter((product) => product.availableSizes.indexOf(size)>=0).sort((a, b) => 
           sort === "lowest" ? ((a.price > b.price) ? 1 : -1) :
             sort === "highest" ? ((a.price < b.price) ? 1 : -1) :
               ((a._id > b._id) ? 1 : -1)
         )
        }
    })
}

export const sortProducts = (filteredProducts,  sort) => (dispatch) => {
    const curr=filteredProducts.slice();//Become a new arry, make the redux work for it if the filteredProducts existing 
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort, 
            items: curr.sort((a, b) => 
                   sort === "lowest" ? ((a.price > b.price) ? 1 : -1) :
                   sort === "highest" ? ((a.price < b.price) ? 1 : -1) :
                   ((a._id > b._id) ? 1 : -1)
        )
        }
    })
}

export const addToCart = (product) => (dispatch, getState) => {
    //Using getState to get the perState
    const cartItems = getState().cart.cartItems.slice();
    const exists = false;
    cartItems.forEach(x => {
        if (x._id == product._id) {
            x.count++;
            exists = true;
        }
    })
    if (!exists) {
        cartItems.push({...product, count:1});
    }

    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems },
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice().filter(x => x._id != product._id);

    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems },
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const createOrder = (order) =>(dispatch)=> {
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    }).then(res => res.json()).
        then((data) => {
            dispatch({type:CREATE_ORDER, payload:data});
            localStorage.clear("cartItems");
            dispatch({ type: CLEAR_CART });
        }
    )
}

export const clearOrder = () => (dispatch)=>{
    dispatch({type:CLEAR_ORDER});
}


export const addItems=(product)=>(dispatch,getState)=>{
    const cartItems = getState().cart.cartItems.slice()
    cartItems.forEach(
        x => {
            if (x._id === product._id) {
                x.count++;
            }
        }
    );

    dispatch({
        type: ADD_ITEMS,
        payload: { cartItems },
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const subItems=(product)=>(dispatch,getState)=>{
    const cartItems = getState().cart.cartItems.slice();
       cartItems.forEach(
        x => {
            if (x._id === product._id&&x.count>1) {
                x.count--;
            }
        }
    );

    dispatch({
        type: SUB_ITEMS,
        payload: { cartItems },
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}





