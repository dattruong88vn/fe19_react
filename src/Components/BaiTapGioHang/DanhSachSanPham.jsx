import React, { Component } from 'react';
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
    
    renderSanPham = () => {
        return this.props.mangSanPham.map((item, index) => {
            return <SanPham 
                        sp = {item} 
                        key = {index}
                        chonSanPham = {this.props.chonSanPham}
                    />
        })
    }
    
    render() {
        return (
            <div className="row">
                {this.renderSanPham()}
            </div>
        )
    }
}
