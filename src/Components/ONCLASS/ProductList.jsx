import React, { Component } from 'react';
import Product from './Product.jsx';

export default class ProductList extends Component {

    mangSP = this.props.mangSP;

    renderSP= () => {
       return this.mangSP.map((item, index) => {
           return <Product xemChiTiet={this.props.xemChiTiet} sanPham={item} key={index} />
       })
    }

    render() {
        return (
            <div className="row">
                {this.renderSP()}
            </div>
        )
    }
}
