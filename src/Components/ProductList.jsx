import React, { Component } from 'react';
import Product from './Product.jsx';

export default class ProductList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <Product />
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <Product />
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <Product />
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <Product />
                </div>
            </div>
        )
    }
}
