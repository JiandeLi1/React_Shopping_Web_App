import {
    FETCH_PRODUCTS,
    FITER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE
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








