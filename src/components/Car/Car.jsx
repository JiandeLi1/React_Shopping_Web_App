import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import CancelIcon from '@material-ui/icons/Cancel';
import {
    removeFromCart,
    createOrder,
    clearOrder,
    addItems,
    subItems
} from '../../redux/action/action'
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade'
import './Car.css'
;

class Car extends Component {
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
      
        
        this.setState({ ...this.state, showCheckout: false })
        
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            zip: this.state.zip,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a,b)=>a+b.price*b.count, 0)
        }

        this.props.createOrder(order)
        this.props.closeCart();
    }
    closeModal = () => {
        this.props.clearOrder();
    }
    render() {
        const { cartItems,order } = this.props;
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
                                        <span>
                                            
                                            <span className="addItems"
                                                onClick={ ()=>this.props.addItems(item)}
                                            >
                                                +
                                            </span>
                                            {item.count}
                                            <span className="subItems"
                                                 onClick={ ()=>this.props.subItems(item)}
                                            >-</span>
                                            &nbsp;&nbsp;
                                              ${item.price}</span>
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
                           

                                <button
                                    className="finishBtn"
                                type="sumbit">
                                    Finish</button>
                           
                        </form>
                            </Fade>
                        )}
                        
                        {
                    order && (
                        <Modal
                            className="orderInfo"
                            isOpen={true}  
                        >
                            <Zoom>
                                        <CancelIcon
                                            fontSize="lagre"
                                            style={{margin:"1rem"}}
                                            onClick={this.closeModal} />
                                    <div className="order">
                       
                                    <h1>Your order id: {order._id}</h1>
                                    <p>Name: {order.name}</p>
                                    <p>Email: {order.email}</p>
                                    <p>Address: {order.address}</p>
                                    <p>Zip Code: {order.zip}</p>
                                    <h1>Total: {order.total.toFixed(2)}</h1>
                                    <h1>Thanks! Have a Good Day!!</h1>    
                                        
                                </div>
                            </Zoom>
                            

                        </Modal>
                 )   
                }
                    </Grid>
                    
                </Grid>
                 
               
        </Grid>
        )
    }
}

export default connect((state) => ({
    order:state.order.order,
    cartItems:state.cart.cartItems
}),
    {
        removeFromCart,
        createOrder,
        clearOrder,
        addItems,
        subItems
    }
    
)(Car)