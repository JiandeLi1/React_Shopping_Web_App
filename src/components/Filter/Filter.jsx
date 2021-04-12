import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterProduct, sortProducts } from '../../redux/action/action'
import './Filter.css'

class Filter extends Component {
    render() {
        return !this.props.filterProducts ? ( <div>Loading...</div> ):
        (
            <div className="filter">
                <div className="result">{this.props.filterProducts.length} &nbsp;products</div>
                <div className="sort">
                    Order:&nbsp;
                    <select value={this.props.sort} onChange={(e)=> this.props.sortProducts(this.props.filterProducts, e.target.value)}>
                        <option value="">Latest</option>
                        <option value="lowest">Lowest Price</option>
                        <option value="highest">Highest Price</option>
                    </select>
                </div>
                <div className="size">
                    Size:&nbsp;
                    <select value={this.props.size} onChange={ (e)=>this.props.filterProduct(this.props.products, e.target.value, this.props.sort)}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="X">X</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}


export default connect((state)=> ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filterProducts: state.products.filteredItems,
}),
    {
        filterProduct,
        sortProducts
    }
)(Filter)