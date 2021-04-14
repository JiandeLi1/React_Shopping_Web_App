import React from "react";
import Zoom from 'react-reveal/Zoom'
import {  NavLink} from "react-router-dom";

import './main.css'



class Main extends React.Component {
  render() {
    return (
       
   
      <Zoom>
        <div className="main">
        <div className="storeLink">
          <img src={ "/images/title.jpg" } alt=""/>
          <NavLink className="link" to="/Shopping">Go to Store</NavLink>
        </div>
      </div>
      </Zoom>
      
          
      

  );

  }
}

export default Main;