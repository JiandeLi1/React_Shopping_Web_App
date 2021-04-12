import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Navigation from './components/Navigation/Navigation'
import Product from './components/Product/product'
import Filter from './components/Filter/Filter'
import Car from './components/Car/Car'
import './app.css'



function App() {

  // const [product, setProduct] = useState({
  //   product: data.products,
  //   cartItem: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  //   size: "",
  //   sort: ""
  // })

  const [cartPosition, setCarPosition] = useState("translateX(100%)")

  // const removeFromCart = (p) => {
  //   //Copy the recent products in cart
  //   let cartItems = product.cartItem;
  //   //Take out the product you choose in cart
  //   cartItems = cartItems.filter(x => x._id !== p._id)
    
  //   //setProduct is a asynchronous step
  //   setProduct({
  //     ...product,
  //     cartItem: cartItems
  //   });

  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }

  //Add item to the product.cartItem
  // const addToCart = (p) => {
  //   //Copy what does the cart has
  //   const cartItems = product.cartItem;
  //   let inCart = false;

  //   //To check the item you click is in the cart or not
  //   cartItems.forEach((item) => {
  //     if (item._id === p._id) {
  //       //If in the cart, the item count +1
  //       item.count++;
  //       //inCart become true to tell next statement the item you click already in in the cart,
  //       //WE don't need to push a need item to the cart.
  //       inCart = true;
  //     } 
  //   })
  //   //If the item you click is not in the cart, 
  //   //Pushing this to the cart, and set this item's count in 1. 
  //   if (!inCart) {
  //     cartItems.push({...p, count:1})
  //   }

  //   //To renew the cartItem in the product state.
  //   setProduct({ ...product, cartItem: cartItems });
  //   localStorage.setItem("cartItems", JSON.stringify(product.cartItem));
  // }


  //To show the items which has the size you choose
  // const sizeProducts = (e) => {
  //   //value is the size you choose
  //   let { value } = e.target
  //   //s is the sort parameter you choose
  //   let s = product.sort;

  //   //If you didn't choose any size, show all product.
  //   if (value === "") {
  //     setProduct({ size:"", sort:s, product: data.products });
  //   } else {
  //     //If you choose any size, show the product that have the size you choose,
  //     //and sort it will the sort parameter yuou choose
  //     setProduct({
  //       size: value,
  //       sort:s,
  //       product: data.products.filter(p => 
  //         p.availableSizes.indexOf(value) >= 0
  //       ).sort((a, b) => 
  //         s === "lowest" ? ((a.price > b.price) ? 1 : -1) :
  //           s === "highest" ? ((a.price < b.price) ? 1 : -1) :
  //             ((a._id > b._id) ? 1 : -1)
  //       )
  //     });
  //   }
  // }

  //Show the cart
  const openCart = () => {
    setCarPosition("translateX(0%)");
  }
  //Close the cart
  const closeCart = () => {
    setCarPosition("translateX(100%)");
  }

  // const sortProducts = (e) => {
  //   //The value is the sort parameter you choose
  //   let { value } = e.target;
  //   //The curr is the product after yiu choose the parameter in the size
  //   let curr = product.product;
    
  //   //Sort product
  //     setProduct({
  //       sort: value,
  //       product: curr.sort((a, b) => 
  //         value === "lowest" ? ((a.price > b.price) ? 1 : -1) :
  //           value === "highest" ? ((a.price < b.price) ? 1 : -1) :
  //             ((a._id > b._id) ? 1 : -1)
  //       )
  //     });
  // }
  
  //Create a order
  const createOrder = (order) => {
    alert(order.name+ order.email)
  }
    
  
  return (
    <div className="rootBody">
      <Grid xs={ 12 }>
        <Navigation openCart={ openCart }/>
      </Grid>
      <Grid container>
        <Grid xs={0} sm={2}></Grid>
        <Grid container xs={12} sm={8}>
          <Grid item xs={12}>
            <Filter ></Filter>
          </Grid>
          <Product></Product>
        </Grid>
        <Grid xs={0} sm={2}></Grid>
      </Grid>
      
      <div className="cartSection"
        style={{transform: cartPosition}}
      >
        <Grid container>
          <Grid className="transparentSection" sm={0} md={6} lg={9}>
          </Grid>
          <Grid className="shoppingCart"
            xm={12} md={6} lg={3}>
            <Car
              closeCart={closeCart}
              createOrder={ createOrder}
            />
          </Grid>
        </Grid>
        
      </div>
        
      
      
      
    </div>
  );
}

export default App;
