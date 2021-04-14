import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Navigation.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="menu">
                        <MenuIcon fontSize="large"/>
                    </div>
                    <div className="navCenter">
                            Good<FavoriteBorderIcon />Tea
                    </div>
                    <div className="cartSign">
                        <ShoppingCartIcon
                            fontSize="large"
                            onClick={() => this.props.openCart()}
                        />
                    </div>
                     
                </nav>
            </div>
        )
    }
}
