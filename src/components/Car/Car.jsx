import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import './Car.css'

export default class Car extends Component {

    render() {
        const { cartItems } = this.props;
        return (
            <Grid container className="cart">
                <Grid container xs={12}>
                     <Grid xs={12} sm={6} md={3} >
            <div>
                            <a href="javascript:;"
                                onClick={ ()=>this.props.closeCart()}
                >
                     <CancelIcon fontSize="large" style={{ margin: "10px 10px 0 10px" }}/>
                </a>
                {cartItems.length === 0 ?
                    (<div className="cartTitle" >Cart Empty</div>) :
                    (<div className="cartTitle" >You have {cartItems.length} in cart</div>)
                }
                
                    {cartItems.map(item => (
                        <div key={ item._id } className="cartItem">
                            <img src={item.image} alt="" />
                            <div className="info">
                                <div>
                                    { item.title }
                                </div>
                                <div className="price">
                                    <span>{item.count} X ${item.price}</span>
                                    <button className="removeBtn"
                                        onClick={ () => this.props.removeFromCart(item) }
                                    >Remove</button>
                                </div>  
                            </div>
                        </div>
                    ))}
                        </div>

                {/* if Cart has items, show the total and checkout button */}
                        {cartItems.length !== 0 && (
                            <div className="total">
                            <span>
                                Total: {cartItems.reduce((a, b) => a + b.price * b.count, 0).toFixed(2)}
                            </span>
                            <button>
                                CheckOut
                            </button>
                         </div>
                        )}
                        
                   </Grid>
             </Grid>
        </Grid>
        )
    }
}
