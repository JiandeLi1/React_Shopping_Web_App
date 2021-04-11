import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import Fade from 'react-reveal/Fade'
import './Car.css'

export default class Car extends Component {
    state = {
        name: "",
        email: "",
        address: "",
        zip: "",
        card: "",
        cvv:"",
        showCheckout: false
    };

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
//create a order
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            zip: this.state.zip,
            card: this.state.card,
            cvv: this.state.cvv,
            cartItems:this.props.cartItems
        }

        this.props.createOrder(order)
    }
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
                    <Fade right cascade>   
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
                        </Fade>
                    ))}
                        </div>

                {/* if Cart has items, show the total and checkout button */}
                        {cartItems.length !== 0 && (
                            <div className="total">
                            <span>
                                Total: {cartItems.reduce((a, b) => a + b.price * b.count, 0).toFixed(2)}
                            </span>
                                <button onClick={() => {
                                    this.state.showCheckout ?
                                    this.setState({ showCheckout: false }):
                                    this.setState({ showCheckout: true }) }}>
                                CheckOut
                            </button>
                         </div>
                        )}
                        {this.state.showCheckout && (
                            <Fade right cascade>
                            <form className="checkoutForm"
                                onSubmit={ this.createOrder}>
                            <div className="input">
                                <label htmlFor="">Email: </label>
                                    <input type="email"
                                           name="email"
                                        onChange={ this.handleInput}
                                            required/>
                            </div>
                            <div  className="input">
                                <label htmlFor="">Name: </label>
                                    <input type="text"
                                        name="name"
                                     onChange={ this.handleInput}
                                            required/>
                            </div >
                            <div  className="input">
                                <label htmlFor="">Address: </label>
                                    <input type="text"
                                        name="address"
                                     onChange={ this.handleInput}
                                            required/>
                            </div>
                            <div  className="input">
                                <label htmlFor="">Zip: </label>
                                    <input type="text"
                                        name="zip"
                                     onChange={ this.handleInput}
                                            required/>
                            </div>
                            <div  className="input">
                                <label htmlFor="">Card Number: </label>
                                    <input type="text"
                                        name="card"
                                     onChange={ this.handleInput}
                                            required/>
                            </div>
                            <div  className="input">
                                <label htmlFor="">CVV: </label>
                                    <input type="text"
                                        name="cvv"
                                     onChange={ this.handleInput}
                                            required/>
                            </div>

                                <button
                                    className="finishBtn"
                                type="sumbit">
                                    Finish</button>
                           
                        </form>
                            </Fade>
                        )}  
                   </Grid>
             </Grid>
        </Grid>
        )
    }
}
