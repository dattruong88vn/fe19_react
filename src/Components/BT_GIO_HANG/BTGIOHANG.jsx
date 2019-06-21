import React, { Component } from 'react';
import ProductList from './ProductList';
import ModalChiTietSanPham from './ModalChiTietSanPham';
import Basket from './Basket';

export default class BTGIOHANG extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sanPhamDuocXem: {},
            sanPhamDuocChon: {}
        }
    }

    mangDienThoai =
        [{
            id: 'sp_1', name: 'iphoneX', price: '30000000', screen: 'screen_1', backCamera:
                'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all - screen design.Face ID, which makes your face your password'
        },
        {
            id: 'sp_2', name: 'Note 7', price: '20000000', screen: 'screen_2', backCamera: 'backCamera_2',
            frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
        },
        {
            id: 'sp_3', name: 'Vivo', price: '10000000', screen: 'screen_3', backCamera: 'backCamera_3',
            frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality'
        },
        {
            id: 'sp_4', name: 'Blacberry', price: '15000000', screen: 'screen_4', backCamera:
                'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
        }]

    mangSanPhamDuocChon = [];

    xemThongTin = (sp) => {
        this.setState({
            sanPhamDuocXem: sp
        })
    }

    xoaSPGioHang = (sp) => {
        let index = this.mangSanPhamDuocChon.findIndex(item =>item.id === sp.id);
        this.mangSanPhamDuocChon.splice(index, 1);
        this.setState({
            sanPhamDuocChon: {}
        })
    }

    chonSanPham = (sp) => {
        if (
            this.mangSanPhamDuocChon.length === 0 ||
            this.mangSanPhamDuocChon.findIndex(item => item.id === sp.id) === -1
        ) {
            this.mangSanPhamDuocChon.push(sp);
        }
        this.setState({
            /**
                function push return a number --> mangSanPhamDuocChon === 1 sau lần push đầu tiên
                        mangSanPhamDuocChon: this.state.mangSanPhamDuocChon.push(sp)
                        --> dùng spDuocChon
            */
           sanPhamDuocChon: sp
        })
    }

    render() {
        return (
            <div>
                <ProductList
                    mangSP = {this.mangDienThoai}
                    xemThongTin = {this.xemThongTin}
                    chonSanPham = {this.chonSanPham}
                    xoaSPGioHang = {this.xoaSPGioHang}
                />
                <Basket 
                    mangSanPhamDuocChon={this.mangSanPhamDuocChon}
                    xoaSPGioHang = {this.xoaSPGioHang}
                />

                <ModalChiTietSanPham sanPhamDuocXem={this.state.sanPhamDuocXem} />
            </div>
        )
    }
}
