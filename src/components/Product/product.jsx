import React, { Component, Fragment } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import Fade from "react-reveal/Fade"
import Modal from "react-modal"
import Zoom from 'react-reveal/Zoom'
import './product.css'


export default class Product extends Component {
    state = {
        product:null
    }
    openModal = (product) => {
        this.setState({ product });
    }
    closeModal = () => {
        this.setState({ product: null });
    }
    render() {
        return (
            <Fragment>
                
                {this.props.products.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product._id}>
                        <Fade top cascade>
                        <div className="product">
                            <div className="imgContainer">
                                    <a href="javascript:;" onClick={()=>this.openModal(product)}>
                                    <img src={product.image} alt="product.title" />
                                </a>
                                <button
                                    className="btn"
                                    onClick={() => this.props.addToCart(product)}>
                                    <AddShoppingCartIcon fontSize="large" style={{ marginBottom:"-6px"}}/>Add to Cart
                                </button>
                                    
                            </div>
                            <p>{ product.title }</p>
                            <div className="product-price">
                                <div className="price">${product.price}</div>
                            </div>
                        </div>
                     </Fade>
                 </Grid>
                ))}
                {this.state.product && (
                    <Modal isOpen={ true }>
                        <Zoom>
                            <a href="javascript:;" className="close-modal" onClick={ ()=>this.closeModal()}>
                                <CancelIcon />
                            </a>
                            <div className="modal">
                                <div className="modalImg">
                                    <img src={this.state.product.image} alt="" />
                                </div>
                                
                                <div className="modalInfo">
                                    <p className="productTitle">{this.state.product.title}</p>
                                    <p className="productDesc">{this.state.product.description}</p>
                                    <p className="productSize">Avaliable Size: {this.state.product.availableSizes.toString()}</p>
                                    <p className="productPrice">{ this.state.product.price}</p>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )}
            </Fragment>
        )
    }
}
