import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    
    renderSP = () => {
        return this.props.mangSP.map((item, index) => {
            return <Product xemChiTiet={this.props.xemChiTiet} putGioHang={this.props.putGioHang} sanPham={item} key={index} />
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
