import React, { Component } from 'react';
import Product from './Product/Product';

export default class ProductList extends Component {

    renderSP = () => {
        return this.props.mangSP.map((item,index) => {
            return <Product 
                        sp={item} 
                        xemThongTin = {this.props.xemThongTin}
                        chonSanPham = {this.props.chonSanPham}
                        xoaSPGioHang = {this.props.xoaSPGioHang}
                        key={index}
                    />
        })
    }

    render() {
        return (
            <div>
                <div className="row mx-0 w-75 m-auto">
                    {this.renderSP()}
                </div>
            </div>
        )
    }
}
