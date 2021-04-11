import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';

import './product.css'


export default class Product extends Component {
    render() {
        return (
            <Fragment>
                {this.props.products.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={ product._id}>
                        <div className="product">
                            <div className="imgContainer">
                                <a href="javascript:;" >
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
                 </Grid>
                ))}
                 
            </Fragment>
        )
    }
}
