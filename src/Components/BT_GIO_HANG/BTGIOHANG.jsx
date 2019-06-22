import React, { Component } from 'react';
import ProductList from './ProductList';
import ModalChiTietSanPham from './ModalChiTietSanPham';
import GioHang from './GioHang';

export default class BTGIOHANG extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sanPhamDuocXem: {},
            mangGioHang: []
        }
    }

    mangSanPham =
        [{
            id: 'sp_1', name: 'iphoneX', price: 30000000, screen: 'screen_1', backCamera:
                'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all - screen design.Face ID, which makes your face your password'
        },
        {
            id: 'sp_2', name: 'Note 7', price: 20000000, screen: 'screen_2', backCamera: 'backCamera_2',
            frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
        },
        {
            id: 'sp_3', name: 'Vivo', price: 10000000, screen: 'screen_3', backCamera: 'backCamera_3',
            frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality'
        },
        {
            id: 'sp_4', name: 'Blacberry', price: 15000000, screen: 'screen_4', backCamera:
                'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
        }]

    xemThongTin = (sp) => {
        this.setState({
            sanPhamDuocXem: sp
        })
    }

    chonSanPham = (sp) => {
        let newSP = {
            id: sp.id,
            name: sp.name,
            img: sp.img,
            price: sp.price,
            desc: sp.desc,
            soLuong: 1,
        }
        let mangCapNhat = [...this.state.mangGioHang];

        let index = mangCapNhat.findIndex(item => item.id === sp.id);

        if (index === -1) {
            mangCapNhat.push(newSP);
        }
        else {
            mangCapNhat[index].soLuong += 1;
        }
        this.setState({
            mangGioHang: mangCapNhat
        })
    }

    tangGiamSoLuongGioHang = (id, status) => {
        let index = this.state.mangGioHang.findIndex(item => item.id === id);
        if (index !== -1) {
            if (status) {
                this.state.mangGioHang[index].soLuong += 1;
            }
            else {
                if (this.state.mangGioHang[index].soLuong > 1) {
                    this.state.mangGioHang[index].soLuong -= 1;
                }
                else {
                    alert('Số lượng sản phẩm đang chọn là 1...');
                }
            }
        }
        this.setState({
            mangGioHang: this.state.mangGioHang
        })
    }

    xoaSanPhamGioHang = (id) => {
        let index = this.state.mangGioHang.findIndex(item => item.id === id);
        if (index !== -1) {
            this.state.mangGioHang.splice(index, 1);
        }
        this.setState({
            mangGioHang: this.state.mangGioHang
        })
    }

    render() {
        let tongTien = this.state.mangGioHang.reduce((tongTien, item)=>{
            return tongTien += item.price * item.soLuong;
        }, 0);
        return (
            <div>
                <div className="container">
                    <div className="thongTinSanPham">
                        <h2 className="text-center">Danh sách sản phẩm</h2>
                        <ProductList
                            mangSP={this.mangSanPham}
                            xemThongTin={this.xemThongTin}
                            chonSanPham={this.chonSanPham}
                        />
                    </div>
                    <div className="gioHang">
                        <h2 className="text-center">Sản phẩm đã chọn</h2>
                        <GioHang
                            mangGioHang={this.state.mangGioHang}
                            tangGiamSoLuongGioHang={this.tangGiamSoLuongGioHang}
                            xoaSanPhamGioHang={this.xoaSanPhamGioHang}
                            tongTien = {tongTien}
                        />
                    </div>
                </div>

                <ModalChiTietSanPham sanPhamDuocXem={this.state.sanPhamDuocXem} />
            </div>
        )
    }
}
