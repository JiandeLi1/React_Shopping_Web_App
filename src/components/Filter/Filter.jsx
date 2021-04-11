import React, { Component } from 'react'
import './Filter.css'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="result">{this.props.count} &nbsp;products</div>
                <div className="sort">
                    Order:&nbsp;
                    <select value={this.props.sort} onChange={ this.props.sortProducts}>
                        <option value="">Latest</option>
                        <option value="lowest">Lowest Price</option>
                        <option value="highest">Highest Price</option>
                    </select>
                </div>
                <div className="size">
                    Size:&nbsp;
                    <select value={this.props.size} onChange={ this.props.sizeProducts}>
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
