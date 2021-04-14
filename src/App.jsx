import React,  { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Main from './main'
import Shopping from './Shopping'
import Car from './components/Car/Car'
import Navigation from './components/Navigation/Navigation'
import {Route,Switch, BrowserRouter} from 'react-router-dom'
import './app.css'

export default function App() {
  const [cartPosition, setCarPosition] = useState("translateX(100%)")
  const openCart = () => {
    setCarPosition("translateX(0%)");
  }
  //Close the cart
  const closeCart = () => {
    setCarPosition("translateX(100%)");
  }
       return (
         <div className="rootBody">
           
      <Grid xs={ 12 }>
        <Navigation openCart={ openCart }/>
      </Grid>
      
             <BrowserRouter>
                <Switch>
                   
                
							<Route exact path="/" component={Main}/>
							<Route path="/Shopping" component={Shopping}/>

                    
        </Switch>
               </BrowserRouter>
      
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
            />
          </Grid>
          
        </Grid>
        
      </div>
    </div>
               
                    
               

  );
}
    

